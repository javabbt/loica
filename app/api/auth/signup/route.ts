// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { addUser, findUserByEmail } from "@/data/users";

export async function POST(request: Request) {
    try {
        const { email, password, firstName, city, address, phone } = await request.json();

        if (findUserByEmail(email)) {
            return NextResponse.json({ error: "Cet email est déjà utilisé." }, { status: 400 });
        }

        addUser({ email, password, firstName, city, address, phone });

        const token = "fake-token-" + Date.now();
        const response = NextResponse.json({ success: true, token });

        response.cookies.set({
            name: "auth-token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 1 semaine
            path: "/",
        });

        return response;
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

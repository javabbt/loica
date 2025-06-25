import { NextResponse } from "next/server";
import { findUserByEmail } from "@/data/users";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const user = findUserByEmail(email);
    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "auth-token",
      value: "fake-token-" + Date.now(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

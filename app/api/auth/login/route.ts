import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // This is a fake authentication - in real world, you'd verify against a database
    if (email === "test@example.com" && password === "password123") {
      const response = NextResponse.json({ success: true });
      response.cookies.set({
        name: "auth-token",
        value: "fake-token-" + Date.now(),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

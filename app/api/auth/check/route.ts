import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return new NextResponse(null, { status: 401 });
  }

  // Here you would typically verify the token with your backend
  // For now, we'll just check if it exists
  return new NextResponse(null, { status: 200 });
}

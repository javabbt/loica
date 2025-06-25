import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();  // <-- ajouter await ici
  const token = cookieStore.get("auth-token")?.value;

  if (token) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 401 });
}

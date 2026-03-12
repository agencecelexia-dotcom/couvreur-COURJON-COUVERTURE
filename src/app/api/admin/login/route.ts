import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { clientConfig } from "@/config/client.config";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || clientConfig.ADMIN_PASSWORD;

export async function POST(request: Request) {
  const { password } = await request.json();
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }
  const cookieStore = await cookies();
  cookieStore.set("adminAuth", password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("adminAuth");
  return NextResponse.json({ ok: true });
}

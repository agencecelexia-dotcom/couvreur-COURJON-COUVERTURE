import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readData, writeData } from "@/lib/storage";
import { projects as defaultProjects } from "@/data/projects";

const FILE = "projects.json";

async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.get("adminAuth")?.value === "true" || cookieStore.has("adminAuth");
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const data = readData(FILE, defaultProjects);
  return NextResponse.json({ success: true, data });
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const body = await request.json();
  const items = readData(FILE, defaultProjects) as typeof defaultProjects;

  if (body.action === "delete") {
    writeData(FILE, items.filter((i: { id: string }) => i.id !== body.id));
    return NextResponse.json({ success: true });
  }

  const idx = items.findIndex((i: { id: string }) => i.id === body.data?.id);
  if (idx >= 0) {
    (items as unknown[])[idx] = body.data;
  } else {
    (items as unknown[]).push(body.data);
  }
  writeData(FILE, items);
  return NextResponse.json({ success: true });
}

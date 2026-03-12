import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const CLIENT_MD = path.join(ROOT, "CLIENT.md");
const CLIENT_CONFIG_TS = path.join(ROOT, "src", "config", "client.config.ts");

async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has("adminAuth");
}

function parseClientMd(content: string): Record<string, string> {
  const config: Record<string, string> = {};
  for (const line of content.split("\n")) {
    const match = line.trim().match(/^([A-Z][A-Z0-9_]+):\s*"(.*)"$/);
    if (match) config[match[1]] = match[2];
  }
  return config;
}

function generateClientConfig(config: Record<string, string>): string {
  const entries = Object.entries(config)
    .map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`)
    .join("\n");
  return `// AUTO-GENERATED — NE PAS MODIFIER MANUELLEMENT
// Genere par scripts/sync-client.ts depuis CLIENT.md
// Pour modifier: editer CLIENT.md puis lancer npm run sync-client

export const clientConfig = {
${entries}
} as const;

export type ClientConfigKey = keyof typeof clientConfig;
`;
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as Record<string, string>;
    let content = fs.readFileSync(CLIENT_MD, "utf-8");

    for (const [key, value] of Object.entries(body)) {
      if (/^[A-Z][A-Z0-9_]+$/.test(key)) {
        const escaped = value.replace(/"/g, '\\"');
        content = content.replace(
          new RegExp(`^(${key}):\\s*"[^"]*"`, "m"),
          `$1: "${escaped}"`
        );
      }
    }

    fs.writeFileSync(CLIENT_MD, content, "utf-8");

    // Regenerate client.config.ts so changes are visible immediately (local dev + HMR)
    const config = parseClientMd(content);
    fs.writeFileSync(CLIENT_CONFIG_TS, generateClientConfig(config), "utf-8");

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

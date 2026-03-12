/**
 * sync-client.ts — Template Couvreur
 * Lit CLIENT.md et genere src/config/client.config.ts + met a jour globals.css
 * Usage: npm run sync-client
 */

import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const CLIENT_MD = path.join(ROOT, "CLIENT.md");
const CLIENT_CONFIG_TS = path.join(ROOT, "src", "config", "client.config.ts");
const GLOBALS_CSS = path.join(ROOT, "src", "app", "globals.css");

/* ---------- helpers ---------- */

/**
 * Extract the first number from a string.
 * "Plus de 15 ans" -> 15 | "350+" -> 350 | "4.8" -> 4.8
 * Returns the fallback when no number is found.
 */
function extractNumber(value: string, fallback: number): number {
  const parts = value.split("");
  let numStr = "";
  let foundDigit = false;
  let hasDot = false;

  for (const ch of parts) {
    if (ch >= "0" && ch <= "9") {
      numStr += ch;
      foundDigit = true;
    } else if (ch === "." && foundDigit && !hasDot) {
      numStr += ch;
      hasDot = true;
    } else if (ch === "," && foundDigit && !hasDot) {
      // treat comma as decimal separator (french style)
      numStr += ".";
      hasDot = true;
    } else if (foundDigit) {
      break;
    }
  }

  if (!foundDigit) return fallback;
  const parsed = parseFloat(numStr);
  return isNaN(parsed) ? fallback : parsed;
}

/** Numeric fields with their defaults */
const NUMERIC_FIELDS: Record<string, number> = {
  NOMBRE_INTERVENTIONS: 500,
  NOTE_GOOGLE: 4.8,
  NOMBRE_AVIS: 45,
};

/**
 * Escape a value for safe embedding in a generated TS string.
 * Uses split/join instead of regex to avoid escaping issues.
 */
function esc(value: string): string {
  return value
    .split("\\").join("\\\\")
    .split('"').join('\\"')
    .split("\n").join("\\n")
    .split("\r").join("\\r");
}

/* ---------- parsing ---------- */

function parseClientMd(content: string): Record<string, string> {
  const config: Record<string, string> = {};
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    // Match KEY: "value"
    const colonIdx = trimmed.indexOf(":");
    if (colonIdx === -1) continue;
    const key = trimmed.substring(0, colonIdx).trim();
    // Verify key is UPPER_SNAKE_CASE
    if (key.length === 0) continue;
    let valid = true;
    for (const ch of key.split("")) {
      if (!((ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9") || ch === "_")) {
        valid = false;
        break;
      }
    }
    if (!valid || !(key[0] >= "A" && key[0] <= "Z")) continue;

    // Extract value between quotes
    const rest = trimmed.substring(colonIdx + 1).trim();
    if (rest[0] !== '"') continue;
    const lastQuote = rest.lastIndexOf('"');
    if (lastQuote <= 0) continue;
    const value = rest.substring(1, lastQuote);
    config[key] = value;
  }
  return config;
}

/* ---------- generation ---------- */

function generateClientConfig(config: Record<string, string>): string {
  const lines: string[] = [];

  for (const [key, rawValue] of Object.entries(config)) {
    if (key === "TAUX_SATISFACTION") {
      // Strip the % sign and store as number
      const cleaned = rawValue.split("%").join("").trim();
      const num = extractNumber(cleaned, 98);
      lines.push(`  ${key}: ${num},`);
    } else if (key in NUMERIC_FIELDS) {
      const num = extractNumber(rawValue, NUMERIC_FIELDS[key]);
      lines.push(`  ${key}: ${num},`);
    } else {
      lines.push(`  ${key}: "${esc(rawValue)}",`);
    }
  }

  return `// AUTO-GENERATED — NE PAS MODIFIER MANUELLEMENT
// Genere par scripts/sync-client.ts depuis CLIENT.md
// Pour modifier: editer CLIENT.md puis lancer npm run sync-client

export const clientConfig = {
${lines.join("\n")}
} as const;

export type ClientConfigKey = keyof typeof clientConfig;
`;
}

function updateGlobalsCss(css: string, config: Record<string, string>): string {
  let updated = css;

  if (config.COULEUR_PRIMAIRE_900) {
    updated = updated.replace(
      /--color-primary-900:\s*oklch\([^)]+\);/,
      `--color-primary-900: ${config.COULEUR_PRIMAIRE_900};`
    );
  }
  if (config.COULEUR_ACCENT_500) {
    updated = updated.replace(
      /--color-accent-500:\s*oklch\([^)]+\);/,
      `--color-accent-500: ${config.COULEUR_ACCENT_500};`
    );
  }
  if (config.COULEUR_FOND_50) {
    updated = updated.replace(
      /--color-neutral-50:\s*oklch\([^)]+\);/,
      `--color-neutral-50: ${config.COULEUR_FOND_50};`
    );
  }

  if (config.FONT_TITRES) {
    updated = updated.replace(
      /--font-heading:\s*"[^"]+",/,
      `--font-heading: "${config.FONT_TITRES}",`
    );
  }
  if (config.FONT_CORPS) {
    updated = updated.replace(
      /--font-body:\s*"[^"]+",/,
      `--font-body: "${config.FONT_CORPS}",`
    );
  }

  return updated;
}

function main() {
  console.log("sync-client — Template Couvreur\n");

  if (!fs.existsSync(CLIENT_MD)) {
    console.warn("CLIENT.md introuvable - generation config par defaut.");
    const configDir = path.dirname(CLIENT_CONFIG_TS);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    fs.writeFileSync(
      CLIENT_CONFIG_TS,
      [
        "// Auto-generated default config (CLIENT.md not yet available)",
        "export const clientConfig = {",
        '  NOM_ENTREPRISE: "Mon Entreprise",',
        '  NOM_DIRIGEANT: "Nom",',
        '  PRENOM_DIRIGEANT: "Prenom",',
        '  TELEPHONE: "00 00 00 00 00",',
        '  TELEPHONE_URGENCE: "00 00 00 00 00",',
        '  EMAIL: "contact@example.com",',
        '  ADRESSE: "1 rue Exemple",',
        '  VILLE: "Paris",',
        '  CODE_POSTAL: "75001",',
        '  DEPARTEMENT: "Paris",',
        '  REGION: "Ile-de-France",',
        '  HORAIRES_SEMAINE: "8h - 18h",',
        '  HORAIRES_SAMEDI: "9h - 12h",',
        '  HORAIRES_DIMANCHE: "Ferme",',
        '  HORAIRES_URGENCE: "24h/24",',
        '  ANNEE_CREATION: "2010",',
        '  ANNEES_EXPERIENCE: "15",',
        "",
        "  NOMBRE_INTERVENTIONS: 500,",
        "  NOTE_GOOGLE: 4.8,",
        "  NOMBRE_AVIS: 45,",
        "",
        "  TAUX_SATISFACTION: 98,",
        '  ZONE_INTERVENTION: "Paris et alentours",',
        '  ZONE_KM: "30",',
        '  SIRET: "",',
        '  RGE: "",',
        '  ASSURANCE_DECENNALE: "",',
        '  SLOGAN: "Votre artisan de confiance",',
        '  DESCRIPTION_ENTREPRISE: "Entreprise specialisee dans les travaux de couverture.",',
        '  DESCRIPTION_FOOTER: "Votre specialiste en couverture.",',
        '  META_TITLE: "Couvreur - Devis Gratuit",',
        '  META_DESCRIPTION: "Entreprise de couverture. Devis gratuit.",',
        '  ACCROCHE_HERO: "Votre toiture entre de bonnes mains",',
        '  COULEUR_PRIMAIRE: "#1e3a5f",',
        '  COULEUR_SECONDAIRE: "#c8a96e",',
        '  POLICE_TITRES: "Playfair Display",',
        '  POLICE_CORPS: "Inter",',
        '  SERVICE_1_TITRE: "Couverture neuve",',
        '  SERVICE_1_DESC: "Installation complete de toiture.",',
        '  SERVICE_2_TITRE: "Renovation toiture",',
        '  SERVICE_2_DESC: "Renovation et reparation de toiture.",',
        '  SERVICE_3_TITRE: "Etancheite",',
        '  SERVICE_3_DESC: "Traitement etancheite toiture et terrasse.",',
        '  SERVICE_4_TITRE: "Isolation",',
        '  SERVICE_4_DESC: "Isolation thermique de toiture.",',
        '  SERVICE_5_TITRE: "Urgence toiture",',
        '  SERVICE_5_DESC: "Intervention urgente bache et reparation.",',
        '  SERVICE_6_TITRE: "Zinguerie",',
        '  SERVICE_6_DESC: "Travaux de zinguerie et gouttieres.",',
        '  FACEBOOK_URL: "",',
        '  INSTAGRAM_URL: "",',
        '  GOOGLE_URL: "",',
        "} as const;",
        "export type ClientConfig = typeof clientConfig;",
        "",
      ].join("\n"),
      "utf-8"
    );
    console.log("client.config.ts genere avec valeurs par defaut");
    process.exit(0);
  }

  const clientMdContent = fs.readFileSync(CLIENT_MD, "utf-8");
  const config = parseClientMd(clientMdContent);
  console.log(
    `CLIENT.md lu — ${Object.keys(config).length} variables trouvees`
  );

  const configDir = path.dirname(CLIENT_CONFIG_TS);
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  const configContent = generateClientConfig(config);
  fs.writeFileSync(CLIENT_CONFIG_TS, configContent, "utf-8");
  console.log("src/config/client.config.ts genere");

  if (fs.existsSync(GLOBALS_CSS)) {
    const cssContent = fs.readFileSync(GLOBALS_CSS, "utf-8");
    const updatedCss = updateGlobalsCss(cssContent, config);
    if (updatedCss !== cssContent) {
      fs.writeFileSync(GLOBALS_CSS, updatedCss, "utf-8");
      console.log("src/app/globals.css mis a jour (couleurs/fonts)");
    } else {
      console.log("src/app/globals.css — aucun changement de couleur/font");
    }
  }

  console.log("\nSynchronisation terminee !");
  console.log("   Lancez npm run dev pour voir les changements\n");
  console.log("Variables synchronisees :");
  for (const [key, value] of Object.entries(config)) {
    if (key === "TAUX_SATISFACTION") {
      const cleaned = value.split("%").join("").trim();
      console.log(
        `   ${key}: ${extractNumber(cleaned, 98)} (from "${value}")`
      );
    } else if (key in NUMERIC_FIELDS) {
      console.log(
        `   ${key}: ${extractNumber(value, NUMERIC_FIELDS[key])} (from "${value}")`
      );
    } else {
      const display = value.length > 50 ? value.slice(0, 47) + "..." : value;
      console.log(`   ${key}: "${display}"`);
    }
  }
}

main();

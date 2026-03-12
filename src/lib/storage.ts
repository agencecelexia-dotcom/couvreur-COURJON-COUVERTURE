import fs from "fs";
import path from "path";

const STORAGE_DIR = path.join(process.cwd(), "storage");

export function readData<T>(filename: string, defaultData: T): T {
  const filepath = path.join(STORAGE_DIR, filename);
  try {
    if (fs.existsSync(filepath)) {
      return JSON.parse(fs.readFileSync(filepath, "utf-8"));
    }
  } catch {
    // fallback to default
  }
  return defaultData;
}

export function writeData<T>(filename: string, data: T): void {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }
  fs.writeFileSync(
    path.join(STORAGE_DIR, filename),
    JSON.stringify(data, null, 2)
  );
}

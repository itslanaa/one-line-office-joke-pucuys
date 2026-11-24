import { mkdirSync, writeFileSync } from "node:fs";
const line = "I automated my job in a week, then spent six months pretending the automation was me, loudly, in meetings.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");

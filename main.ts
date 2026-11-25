import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — the entry is a single funny line, written here
// as a constant so the program's output is deterministic and byte-identical
// on every run. The joke: an AI agent that does its one job so thoroughly
// it turns into the world's most bureaucratic employee.
const LINE =
  "I gave my AI agent one job. It did it, documented it, and reported me to HR.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly one line of 1-200 characters.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

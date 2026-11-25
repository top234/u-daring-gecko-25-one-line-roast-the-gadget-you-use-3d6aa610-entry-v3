// One-Line Roast: The Gadget You Use Every Day
// Entry v3 — one roast line about the phone's battery saver: a feature
// so eager to prove it helps that it spends its final charge saying so.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My phone's battery saver kicks in at 5%, then burns its last 5% explaining how much it saved.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");

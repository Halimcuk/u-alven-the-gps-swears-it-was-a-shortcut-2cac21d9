// SPDX-License-Identifier: MIT
// Entry for make.fun — "The GPS Swears It Was a Shortcut"
// (u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9).
// One line of plain text: the GPS's own excuse, in its own voice,
// for sending the driver down the wrong road.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS insists the wrong road was a shortcut and blames the map
// data, not itself: the map is years out of date, so the driver is
// the one who should have updated it. The punch names a concrete
// place the map got wrong — a wedding chapel that is a car park now.
const ENTRY =
  "On my map that was a shortcut, the wedding chapel is a car park now, and honestly, updating me was your job.";

// The gate: 1 to 200 characters of UTF-8 text, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

// The output folder comes from the environment (OUTPUT_DIR), falling
// back to the default output folder (/output) when it is unset.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${length} characters to ${join(outDir, "entry.txt")}`);

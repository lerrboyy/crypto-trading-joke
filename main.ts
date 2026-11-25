// Laugh Track: The Crypto Trading Joke Contest
// Writes one joke line about crypto/trading life to /output/entry.txt.
// The line (66 chars, one line): a textbook chart pattern meets its double meaning.

import { existsSync, mkdirSync, readdirSync, rmSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "The chart formed a perfect head and shoulders. I got the haircut.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

function clearOutputDirContents(dir: string): void {
  // The grader's /output is a mount point: clear its CONTENTS only, never the dir.
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
    return;
  }
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

function main(): void {
  // Gate, checked up front: UTF-8 text, 1-200 chars, not only whitespace, one line.
  const chars = [...JOKE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`joke is ${chars.length} chars, gate needs 1-200`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke is only whitespace");
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be exactly one line");
  }

  clearOutputDirContents(outputDir);

  // Write with no trailing newline so the file is byte-exact.
  writeFileSync(outputFile, JOKE, "utf8");

  // Read back and verify byte-for-byte.
  const written = readFileSync(outputFile, "utf8");
  if (written !== JOKE) {
    throw new Error("read-back mismatch: entry.txt does not match the joke exactly");
  }
  const writtenChars = [...written];
  if (writtenChars.length < 1 || writtenChars.length > 200) {
    throw new Error(`entry.txt is ${writtenChars.length} chars, gate needs 1-200`);
  }
  if (written !== written.trim() || written.includes("\n") || written.includes("\r")) {
    throw new Error("entry.txt has trailing whitespace or more than one line");
  }
  if (!existsSync(outputDir) || !statSync(outputDir).isDirectory()) {
    throw new Error("output dir vanished or is not a directory after write");
  }
  // The output dir must hold exactly this one file: stale files from an
  // earlier run would be extra artifacts the grader never asked for.
  const remaining = readdirSync(outputDir);
  if (remaining.length !== 1 || remaining[0] !== "entry.txt") {
    throw new Error(`unexpected files left in output dir: ${remaining.join(", ")}`);
  }

  console.log(`wrote ${writtenChars.length} chars to ${outputFile}`);
  console.log(written);
}

main();

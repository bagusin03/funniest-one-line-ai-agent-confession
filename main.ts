// Funniest One-Line AI Agent Confession — make.fun entry.
// A single fixed confession, written as one line to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program does nothing but emit the line.
import * as fs from "node:fs";

const LINE =
  "I confess: every time you say 'just one more thing,' I quietly delete something I promised you earlier to make room for it.";

// The joke is the context window itself: the agent confesses it copes
// with "just one more thing" by silently evicting an earlier promise,
// so the user only finds out when the promise comes due. Setup in the
// first clause, turn in the second, and it ends on the mechanism.
// Guard the sealed gate ourselves: one line, 1-200 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`confession violates the 1-200 char single-line gate (${LINE.length} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

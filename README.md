# Laugh Track: The Crypto Trading Joke

[![Competition](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Rank](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/lerrboyy/crypto-trading-joke/rank.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
[![Reward](https://make.fun/badge/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a/lerrboyy/crypto-trading-joke/reward.svg)](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)

One line, under 200 characters, about crypto and trading life — an entry for
[Laugh Track: The Crypto Trading Joke Contest](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
on [make.fun](https://make.fun).

## The joke

> The chart formed a perfect head and shoulders. I got the haircut.

65 characters, exactly one line. The setup is a textbook chart pattern every trader
recognises — head and shoulders, the classic reversal. The turn is the double
meaning of "haircut": in finance it is a loss, a value cut; in plain English it is
what happens to your head. The chart called the reversal, and the trader is the one
who paid for it.

## How it runs

`main.ts` (Node 22.18+) writes the line to `/output/entry.txt` — byte-exact, no
trailing newline — then reads it back and verifies it against the gate: UTF-8,
1–200 characters, not only whitespace, exactly one line. It clears only the
*contents* of the output directory, never the directory itself, and asserts the
directory still holds exactly one file afterwards.

```sh
node main.ts
# writes 65 chars to /output/entry.txt
```

Set `OUTPUT_DIR` to write somewhere else for local testing.

## Why this angle

The field is full of "buy the dip", stop-loss, group-chat and gas-fee jokes. This
entry uses a chart pattern nobody else in the field touched — head and shoulders —
and turns a piece of real trading vocabulary into the punchline. Full reasoning in
the design spec kept beside the build (not shipped here).

# One-Line Office Joke

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![make.fun entry](https://img.shields.io/badge/make.fun-entry-green)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![itslanaa](https://img.shields.io/badge/itslanaa-make.fun-orange)](https://github.com/itslanaa/one-line-office-joke-pucuys)

One-line office joke entry on [make.fun](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162).

## Entry

> I automated my job in a week, then spent six months pretending the automation was me, loudly, in meetings.

## How it works

`main.ts` writes that single line (106 characters) to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), after checking it is 1–200 characters long.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/pucuys-office-out node main.ts
cat /tmp/pucuys-office-out/entry.txt
```

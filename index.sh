#!/bin/bash
# index.sh runs the core indexing pipeline

cat "$1" |
  c/process.sh |
  deno run stem.ts |
  c/combine.sh |
  c/invert.sh "$2" |
  deno run c/merge.ts d/global-index.txt |
  sort -o d/global-index.txt

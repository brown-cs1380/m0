#!/bin/bash

echo "$1" >>d/visited.txt

curl -sL "$1" |
  tee >(deno run c/getURLs.ts "$1" | grep -vxf d/visited.txt >>d/urls.txt) |
  deno run c/getText.ts

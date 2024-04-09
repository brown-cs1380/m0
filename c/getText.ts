#!/usr/bin/env node

// Extract text from a web page
import { convert } from "html-to-text";
import readline from "node:readline";
import process from "node:process";

// Example use of convert:
const html = "<div>Hello World</div>";
console.log(convert(html)); // Hello World

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO Add some code

rl.on("line", (_line: string) => {
  // TODO Add some code
});

rl.on("close", () => {
  // TODO Add some code
});

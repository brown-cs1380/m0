#!/usr/bin/env node

// use Porter Stemmer to stem individual terms in a streaming fashion

import readline from 'node:readline';
import process from 'node:process';
import _natural from 'natural';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', function(_line: string) {
  // TODO some code
});

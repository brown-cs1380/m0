#!/usr/bin/env node

// merge two files---the incoming 1-page index and the global index (on disk)
// the details of the global index can be seen in the test cases.

import _fs from 'node:fs';
import {exit as _exit, stdin as input} from 'node:process';
import readline from 'node:readline';

const rl = readline.createInterface({
  input,
});

// TODO some code here
rl.on('line', (_line: string) => {
  // TODO some code here
});

rl.on('close', () => {
  mergeIndices();
});

const mergeIndices = () => {
  // TODO some code here
};

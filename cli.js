#!/usr/bin/env node

var program = require('commander');

program
  .version('0.1.0')
  .option('-h, --help', 'Show w-cli help')
  .parse(process.argv);

if (program.help) console.log('w -v for version number');

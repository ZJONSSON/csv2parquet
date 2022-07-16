#!/usr/bin/env node
const duckdb = require('duckdb');
const path = require('path');
const db = new duckdb.Database(':memory:'); 
const argv = require('minimist')(process.argv.slice(2));
const [input,output] = argv._;

if (!argv.sql && (!input || !output)) {
  console.log('usage: csv2parquet [input file glob] [output file] --[options]');
  return;
}

let sql;
if (argv.sql) sql = argv.sql.replace('{input}',`'${input}'`).replace('{output}',`'${output}'`);
else sql = `copy (select * from '${input}') to  '${output}'(FORMAT PARQUET)`;

db.all(sql, (err,d) => console.log(err ? 'Error: '+err.message : d));
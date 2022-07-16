csv2parquet is a CLI tool to quickly convert one or more csv files to parquet, using [duckdb](https://duckdb.org)

First step is to install globally with:

```
npm install csv2parquet -g
```

Usage:
```
csv2parquet [input] [outputfile]
```

Input can defined as a [GLOB](https://en.wikipedia.org/wiki/Glob_(programming)) pattern.

Example: Take all files from subdirectories in `./files` that start with `total_count_` and end with `.csv` and output to the `total_counts.parquet` file
```
csv2parquet ./files/*/total_count_*.csv total_counts.parquet
```
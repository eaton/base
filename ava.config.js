export default {
  "files": [
    "tests/**/*",
    "!tests/**/fixtures/**/*",
    "!tests/**/*.md"
  ],
  "extensions": {
    "ts": "module"
  },
  "nodeArguments": [
    "--loader=ts-node/esm"
  ]
};
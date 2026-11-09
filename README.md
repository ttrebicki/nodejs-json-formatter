# JSON formatter (Node.js)

**Project URL:** https://roadmap.sh/projects/nodejs-json-formatter

Solution for the [Node.js JSON formatter project](https://roadmap.sh/projects/nodejs-json-formatter) on [roadmap.sh](https://roadmap.sh/).

CLI that reads a JSON file from disk and prints pretty-printed JSON to stdout, with clear errors on stderr when the path is missing, the file cannot be read, or the content is invalid JSON.

## What it does

Given a path to a JSON file, the script:

1. Reads the file with `node:fs/promises` (`readFile`).
2. Parses the contents with `JSON.parse()`.
3. Prints formatted output with `JSON.stringify(value, null, 2)` on success.
4. On failure, writes messages to **stderr** and sets a non-zero exit code:
   - No file path → `error: please provide a JSON file path`
   - Unreadable file → `error: could not read file: <path>`
   - Invalid JSON → `error: invalid JSON in file: <path>`

## Requirements

- [Node.js](https://nodejs.org/) **18 or newer** (ES modules, no extra dependencies).

```bash
node -v
```

## Setup

```bash
npm install
```

## Sample files

- `user.json` — valid JSON for happy-path tests.
- `broken.json` — intentionally invalid JSON (missing closing `}`) for the parse error path.

## Usage

```bash
node json-formatter.js user.json
```

or:

```bash
npm start -- user.json
```

Example output:

```text
{
  "name": "Ava",
  "role": "Developer",
  "skills": [
    "JavaScript",
    "Node.js"
  ]
}
```

Other checks:

```bash
node json-formatter.js broken.json
node json-formatter.js missing.json
node json-formatter.js
```

Formatted JSON goes to **stdout** so you can redirect it:

```bash
node json-formatter.js user.json > pretty.json
```

#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$SCRIPT_DIR/out"
mkdir -p "$OUT_DIR"
javac -d "$OUT_DIR" "$SCRIPT_DIR/src/Server.java"
echo "Compiled to $OUT_DIR"
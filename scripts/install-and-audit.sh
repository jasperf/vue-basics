#!/bin/bash
# Install dependencies and run audit for critical projects
# This will take a while...

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
REPORT_FILE="$ROOT_DIR/docs/SECURITY-AUDIT-REPORT.txt"

cd "$ROOT_DIR"

echo "=== Vue Basics Security Audit Report ===" > "$REPORT_FILE"
echo "Date: $(date)" >> "$REPORT_FILE"
echo "Installing dependencies and auditing critical projects..." >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Priority order: Backends first (highest security risk)
PROJECTS=(
  "vue-shop/backend"
  "vue-shop/frontend"
  "axios"
  "todo-app"
  "vue-cli-webpack-project"
)

for dir in "${PROJECTS[@]}"; do
  if [ -f "$dir/package.json" ]; then
    echo "======================================" >> "$REPORT_FILE"
    echo "Project: $dir" >> "$REPORT_FILE"
    echo "======================================" >> "$REPORT_FILE"

    echo "Processing $dir..."
    cd "$dir"

    # Install dependencies
    echo "Installing dependencies..." >> "$REPORT_FILE"
    npm install > /dev/null 2>&1
    INSTALL_STATUS=$?

    if [ $INSTALL_STATUS -ne 0 ]; then
      echo "Status: npm install failed (exit code: $INSTALL_STATUS)" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
    else
      echo "Status: Dependencies installed successfully" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"

      # Run audit
      echo "Vulnerabilities:" >> "$REPORT_FILE"
      if command -v jq &> /dev/null; then
        npm audit --json 2>/dev/null | jq -r '.metadata | "  Critical: \(.vulnerabilities.critical // 0)\n  High: \(.vulnerabilities.high // 0)\n  Moderate: \(.vulnerabilities.moderate // 0)\n  Low: \(.vulnerabilities.low // 0)\n  Total: \(.vulnerabilities.total // 0)"' >> "$REPORT_FILE" 2>/dev/null || echo "  npm audit failed" >> "$REPORT_FILE"
      else
        # Fallback if jq not available
        npm audit 2>&1 | grep -E "^found|Critical|High|Moderate|Low" | head -15 >> "$REPORT_FILE"
      fi

      echo "" >> "$REPORT_FILE"

      # Get outdated packages count
      echo "Outdated packages:" >> "$REPORT_FILE"
      OUTDATED_COUNT=$(npm outdated --json 2>/dev/null | jq 'length' 2>/dev/null || echo "N/A")
      echo "  Count: $OUTDATED_COUNT" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
    fi

    cd "$ROOT_DIR"
  fi
done

echo "======================================" >> "$REPORT_FILE"
echo "Audit complete!" >> "$REPORT_FILE"
echo "======================================" >> "$REPORT_FILE"

cat "$REPORT_FILE"

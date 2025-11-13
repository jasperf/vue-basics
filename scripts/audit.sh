#!/bin/bash
# Security audit script for all Vue.js projects in the repository
# Outputs a comprehensive report to docs/SECURITY-AUDIT-REPORT.txt

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
REPORT_FILE="$ROOT_DIR/docs/SECURITY-AUDIT-REPORT.txt"

cd "$ROOT_DIR"

echo "=== Vue Basics Security Audit Report ===" > "$REPORT_FILE"
echo "Date: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# List of projects to audit
PROJECTS=(
  "vue-shop/backend"
  "vue-shop/frontend"
  "axios"
  "todo-app"
  "vue-cli-webpack-project"
  "twitter"
  "drag-and-drop"
  "ready-vuejs/firebase-vuejs"
  "ready-vuejs/manager-app"
  "ready-vuejs/concrete-calculator"
  "ready-vuejs/axios-vuejs"
)

for dir in "${PROJECTS[@]}"; do
  if [ -f "$dir/package.json" ]; then
    echo "======================================" >> "$REPORT_FILE"
    echo "Project: $dir" >> "$REPORT_FILE"
    echo "======================================" >> "$REPORT_FILE"

    cd "$dir" 2>/dev/null || continue

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
      echo "Status: node_modules not found - need to run npm install" >> "$REPORT_FILE"
      echo "" >> "$REPORT_FILE"
    else
      echo "Status: Running audit..." >> "$REPORT_FILE"

      # Run npm audit and capture summary
      if command -v jq &> /dev/null; then
        npm audit --json 2>/dev/null | jq -r '.metadata | "Critical: \(.vulnerabilities.critical // 0)\nHigh: \(.vulnerabilities.high // 0)\nModerate: \(.vulnerabilities.moderate // 0)\nLow: \(.vulnerabilities.low // 0)\nTotal: \(.vulnerabilities.total // 0)"' >> "$REPORT_FILE" 2>/dev/null || echo "npm audit failed" >> "$REPORT_FILE"
      else
        # Fallback if jq not available
        npm audit 2>&1 | grep -E "(Critical|High|Moderate|Low|found)" | head -10 >> "$REPORT_FILE"
      fi

      echo "" >> "$REPORT_FILE"
    fi

    cd "$ROOT_DIR" > /dev/null
  else
    echo "======================================" >> "$REPORT_FILE"
    echo "Project: $dir" >> "$REPORT_FILE"
    echo "======================================" >> "$REPORT_FILE"
    echo "Status: package.json not found" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
  fi
done

echo "======================================" >> "$REPORT_FILE"
echo "Audit complete. Report saved to: $REPORT_FILE" >> "$REPORT_FILE"
echo "======================================" >> "$REPORT_FILE"

echo "Audit complete! Report saved to: $REPORT_FILE"

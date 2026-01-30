#!/bin/bash
# IndexNow ping script - notifies search engines of updated pages
# Usage: ./scripts/indexnow-ping.sh [url1 url2 ...]
# If no URLs provided, submits all URLs from sitemap

KEY="09ae0361b0d124a179e175f1ede5463e"
HOST="miagentuca.es"
ENDPOINT="https://api.indexnow.org/indexnow"

# If specific URLs passed as arguments, use those; otherwise extract from sitemap
if [ $# -gt 0 ]; then
  URLS=("$@")
else
  # Extract all URLs from sitemap.xml
  URLS=($(grep -oP '(?<=<loc>)[^<]+' public/sitemap.xml))
fi

if [ ${#URLS[@]} -eq 0 ]; then
  echo "No URLs found to submit."
  exit 1
fi

echo "Submitting ${#URLS[@]} URLs to IndexNow..."

# Build JSON array of URLs
URL_JSON=""
for url in "${URLS[@]}"; do
  if [ -n "$URL_JSON" ]; then
    URL_JSON="$URL_JSON,"
  fi
  URL_JSON="$URL_JSON\"$url\""
done

# Submit batch request
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$ENDPOINT" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{
    \"host\": \"$HOST\",
    \"key\": \"$KEY\",
    \"keyLocation\": \"https://$HOST/$KEY.txt\",
    \"urlList\": [$URL_JSON]
  }")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

echo "Response code: $HTTP_CODE"

case $HTTP_CODE in
  200) echo "OK - All URLs submitted successfully." ;;
  202) echo "Accepted - URLs accepted, will be processed." ;;
  400) echo "Bad request - check URL format." ;;
  403) echo "Forbidden - key not valid." ;;
  422) echo "Unprocessable - URLs don't match host." ;;
  429) echo "Too many requests - try again later." ;;
  *)   echo "Unexpected response: $BODY" ;;
esac

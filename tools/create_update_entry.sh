#!/bin/bash

# Check if user and pass is set
if [ -z ${API_USERNAME} ]; then
  echo "Please set \"API_USERNAME\"!"
  exit 1
fi

if [ -z ${API_PASSWORD} ]; then
  echo "Please set \"API_PASSWORD\"!"
  exit 1
fi

# should point to your api
#API_PREFIX="https://"
#API_PATH="nameless-rom.org/update"
API_PREFIX="http://"
API_PATH="localhost:3000/update"

# 1 = channel
# 2 = filename
# 3 = md5sum
# 4 = timestamp (Unix)
# 5 = codename
# 6 = namelessversion

channel=-1
filename=-1
md5sum=-1
timestamp=-1
codename=-1
namelessversion="n-2.0"

if [ -z $1 ]; then
  echo "Enter a channel name!"
  exit 1
else
  channel=$1
fi

if [ -z $2 ]; then
  echo "Enter a filename!"
  exit 1
else
  filename=$2
fi

if [ -z $3 ]; then
  echo "Enter a md5sum!"
  exit 1
else
  md5sum=$3
fi

if [ -z $4 ]; then
  echo "Enter a timestamp (Unix)!"
  exit 1
else
  timestamp=$4
fi

if [ -z $5 ]; then
  echo "Enter a codename!"
  exit 1
else
  codename=$5
fi

if [ -z $6 ]; then
  namelessversion="n-2.0"
else
  namelessversion=$6
fi

# Create a json file
(cat << EOF) > temp.json
    {
        "channel": "${channel}",
        "filename": "${filename}",
        "md5sum": "${md5sum}",
        "downloadurl": "https://sourceforge.net/projects/namelessrom/files/${namelessversion}/${codename}/${filename}/download",
        "timestamp": "${timestamp}",
        "codename": "${codename}"
    }
EOF

# Send Device to MongoDB

curl -H "Content-Type: application/json" --data @temp.json --url ${API_PREFIX}${API_USERNAME}:${API_PASSWORD}@${API_PATH}

rm temp.json -rf

echo ""
echo "Created Update in database!"

exit 0

#!/bin/bash
set -e

npm config set spin false

if [ "$EMBER_TRY_SCENARIO" ]; then
  npm install -g bower
  bower --version
  npm install phantomjs-prebuilt
  node_modules/phantomjs-prebuilt/bin/phantomjs --version
fi

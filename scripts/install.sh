#!/bin/bash
set -e

npm install

if [ "$EMBER_TRY_SCENARIO" ]; then
  bower install
fi

#!/bin/bash
set -e

if [ "$EMBER_TRY_SCENARIO" ]; then
  ember try $EMBER_TRY_SCENARIO test
fi

if [ "$NODE_TESTS" = "true" ]; then
  npm run nodetest
fi

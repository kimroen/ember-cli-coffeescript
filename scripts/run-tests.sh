#!/bin/bash
set -ev

if [ "$EMBER_TRY_SCENARIO" ]; then
  ember try $EMBER_TRY_SCENARIO test
fi

if [ "$NODE_TESTS" ]; then
  npm run nodetests
fi

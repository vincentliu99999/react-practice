#!/bin/bash
set -e

pwd

# Remove .env
rm -rf parameters.json

case "$1" in
    master)
        echo generating master config
        cp parameters-dev.json parameters.json
        ;;
    stg)
        echo generating stg config
        cp parameters-stg.json parameters.json
        ;;
    prod)
        echo generating prod config
        cp parameters-prod.json parameters.json
        ;;
    *) echo "Environment string must be develop/staging/master string!" ; exit 1 ;;
esac

cat parameters.json | xargs echo -e
echo "$(cat parameters.json)"
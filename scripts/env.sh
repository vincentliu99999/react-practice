#!/bin/bash
set -e

pwd

# Remove .env
rm -rf parameters.json

echo $TRAVIS_BUILD_NUMBER

case "$1" in
    master)
        echo generating master config
        cp ./config/parameters-dev.json parameters.json
        ;;
    stg)
        echo generating stg config
        cp ./config/parameters-stg.json parameters.json
        ;;
    prod)
        echo generating prod config
        cp ./config/parameters-prod.json parameters.json
        ;;
    travis)
        echo travis test
        touch parameters.json
        ;;
    *) echo "Environment string must be develop/staging/master/travis string!" ; exit 1 ;;
esac

cat parameters.json | xargs echo -e
echo "$(cat parameters.json)"
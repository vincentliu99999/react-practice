# Documentation

## [ESDoc](https://esdoc.org/manual/feature.html)

```shell
npm install --save-dev esdoc esdoc-standard-plugin
./node_modules/.bin/esdoc -h

echo '{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "esdoc-standard-plugin"}]
}' > .esdoc.json
./node_modules/.bin/esdoc
open ./docs/index.html

npm install esdoc-jsx-plugin esdoc-ecmascript-proposal-plugin esdoc-react-plugin
```

## [JSDoc](http://usejsdoc.org/about-getting-started.html)

```shell
npm i jsdoc better-docs
touch jsdoc.conf.json
```

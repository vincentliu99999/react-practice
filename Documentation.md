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

<https://github.com/jsdoc/jsdoc>

```shell
npm i jsdoc better-docs
touch jsdoc.conf.json

jsdoc -r ./src/ -d ./docs
```

## Stroybook

- [Storybook for React](https://storybook.js.org/docs/guides/guide-react/)

```shell
npx -p @storybook/cli sb init --type react_scripts
npm run storybook

npm i -D @storybook/react
rm -rf node_modules
npm i
rnpm run build-storybook
```

# [ESLint](https://eslint.org/docs/user-guide/configuring)

## 設定

1. 檔案
2. 設定檔 JavaScript, JSON, YAML

## log

```shell
npm run lint > ./logs/lint.log
```

### log - install eslint

`npm install eslint --save-dev`

```log
npm WARN @egoist/vue-to-react@1.1.0 requires a peer of vue@^2.6.10 but none is installed. You must install peer dependencies yourself.
npm WARN @mdx-js/react@1.6.6 requires a peer of react@^16.9.0 but none is installed. You must install peer dependencies yourself.
npm WARN @storybook/preset-create-react-app@3.1.2 requires a peer of react-scripts@>=3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN acorn-jsx@5.2.0 requires a peer of acorn@^6.0.0 || ^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.5.0 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@17.1.1 requires a peer of eslint@^4.19.1 || ^5.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@17.1.1 requires a peer of eslint-plugin-import@^2.18.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@17.1.1 requires a peer of eslint-plugin-jsx-a11y@^6.2.3 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb-base@13.2.0 requires a peer of eslint@^4.19.1 || ^5.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb-base@13.2.0 requires a peer of eslint-plugin-import@^2.17.2 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-react-app@3.0.8 requires a peer of eslint@5.x but none is installed. You must install peer dependencies yourself.
npm WARN eslint-loader@2.1.1 requires a peer of eslint@>=1.6.0 <6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-import@2.14.0 requires a peer of eslint@2.x - 5.x but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-jsx-a11y@6.1.2 requires a peer of eslint@^3 || ^4 || ^5 but none is installed. You must install peer dependencies yourself.
npm WARN react-axios@2.0.3 requires a peer of axios@^0.15.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-dom@16.13.1 requires a peer of react@^16.13.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1
```

### log - npx eslint --init

```log
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-plugin-react@^7.21.5, eslint-config-airbnb@latest, eslint@^5.16.0 || ^6.8.0 || ^7.2.0, eslint-plugin-import@^2.22.1, eslint-plugin-jsx-a11y@^6.4.1, eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
```

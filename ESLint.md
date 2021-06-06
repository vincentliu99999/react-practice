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

## eslint-parsing-error-unexpected-token

<https://stackoverflow.com/questions/36001552/eslint-parsing-error-unexpected-token>

`npm install babel-eslint --save-dev`

eslintrc add `"parser": "babel-eslint"`

Create React App 已包含 `babel-eslint`，依照建議重新調整

```log
There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "babel-eslint": "9.0.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of babel-eslint was detected higher up in the tree:

  /Users/vincent.liu/workspace/vincent/f2e/react-practice/node_modules/babel-eslint (version: 10.1.0) 

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/vincent.liu/workspace/vincent/f2e/react-practice/node_modules/babel-eslint is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls babel-eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed babel-eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!
```

### issue - esling

```log
> react-practice@0.1.0 start /Users/vincent.liu/workspace/vincent/f2e/react-practice
> react-scripts start


There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "eslint": "5.6.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of eslint was detected higher up in the tree:

  /Users/vincent.liu/workspace/vincent/f2e/react-practice/node_modules/eslint (version: 7.28.0) 

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/vincent.liu/workspace/vincent/f2e/react-practice/node_modules/eslint is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!
```

# [Redux](https://redux.js.org/introduction/getting-started)

## [安裝](https://redux.js.org/introduction/installation)

```shell
npm install redux

npm install react-redux
npm install --save-dev redux-devtools
```

## 工具

- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

## [原則](https://redux.js.org/introduction/three-principles)

```javascript
// state tree
console.log(store.getState())
```

1. Single source of truth: 用單一 state tree 管理狀態，維持狀態一致
1. State is read-only: 僅能透過呼叫 action 變更 state tree
1. Changes are made with pure functions: reducer 處理 state tree 資料變更

Reducer 用途：取得上一次的 state 及 action，回傳新的 state

## [生態](https://redux.js.org/introduction/ecosystem)

- [Library Integration and Bindings]
  - [reduxjs/react-redux](https://github.com/reduxjs/react-redux) React 綁定  Redux
- Side Efeect
  - [gaearon/redux-thunk](https://redux.js.org/introduction/ecosystem#side-effects)
- Middleware
  - [agraboso/redux-api-middleware](https://github.com/agraboso/redux-api-middleware) 接收 [RSAAs](https://github.com/agraboso/redux-api-middleware#redux-standard-api-calling-actions)，回傳 [FSAs](https://github.com/agraboso/redux-api-middleware#flux-standard-actions)
- Dev Tools
  - [evgenyrodionov/redux-logger](https://github.com/evgenyrodionov/redux-logger) console 顯示 action, states, diffs
- Forms
  - [erikras/redux-form](https://github.com/erikras/redux-form)

## Redux Essentials

### [概念](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

管理及更新應用程式狀態，使用 event 稱為 actions

使用時機

- 大量狀態需要管理
- state 更新頻繁
- state 更新邏輯複雜
- 中大型專案，多人開發

Redux Terms and Concepts

- State Management: state, view, actions(one-way data flow)
- Immutability

Terminology

- Actions: 具有 type 屬性的 Object，描述應用程式變更後的事件，通常會命名為 `domain/eventName`，回傳內容通常命名為 `payload`
- Action Creator: 用來回傳 action 物件的 function
- Reducers: 接收現有狀態及 action 物件，決定如何更新 state，並回傳新的 state
  - 新的 state 僅能由 state, action 產出
  - 已存在的 state 不允許更新，可以複製使用
  - 不能有非同步邏輯、產出隨機值
- Store: Redux state
- Dispatch: 僅能透過傳入 action 物件給 store.dispatch 來更新 state(可以想像為觸發一個事件)
- Selectors: 擷取 store 部分資料，可避免重複邏輯不斷出現

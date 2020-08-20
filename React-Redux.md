# [React Redux](https://react-redux.js.org/)

用來綁定 Redux, React

```shell
npm install react-redux
```

## Provider 提供 Store

把 APP 包在 Provider 裡，讓 store 可在 app 裡使用

## connect 連結 Component

使用 connect 取得 Redux store 資料，store 資料更新時會重新取得

選擇性參數

1. mapStateToProps: store 更新時，會被呼叫。他將接收完整的 store，並回傳 component 所需的物件資料
1. mapDispatchToProps
    1. function: component 建立時，會被呼叫。
    1. object: 包含 action creator，成為 prop function，呼叫時自動轉發到 action。建議使用 `object shorthand`

- 不監聽 store，不注入 action creator: store 變更時，不回重新 render。使用 props.dispatch 手動轉發 action
- 監聽 store，不注入 action creator: store 中有監聽的資料變更時，會重新 render。使用 props.dispatch 手動轉發 action
- 不監聽 store，注入 action creator: store 變更時，不回重新 render。有注入的 action creator 會自動轉發 action
- 監聽 store，注入 action creator: store 中有監聽的資料變更時，會重新 render。有注入的 action creator 會自動轉發 action

## mapStateToProps

選擇 store 中部分資料，將其連結到 component

```javascript
function mapStateToProps(state, ownProps?)
```

- state: Redux store state
- ownProps: component 需要從 props 取得資料時使用
- 回傳: component 所需的物件，成為 component 的 props，其內含的資料將決定 component 是否需要重新 render

使用指南

- 不只會回傳 store 資料，可以重塑資料，如結合欄位
- 使用 [Selector](https://redux.js.org/recipes/computing-derived-data) 擷取及轉換資料，封裝其過程
- 必須執行速度夠快，確保在輸入值更改時，才進行擷取及轉換資料的過程
- 必須是同步的(Pure and Synchronous)

效能

- 所需的回傳值將決定 component 是否需要重新 render，React Redux 使用 `===` 做比較("shallow equality" check in `shouldComponentUpdate`)
- 僅在必要時產生新的物件 reference，可將其放到 [memoized selector functions](https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector) 確保當 input value 變更時才執行
- 僅在資料變更時，才去執行耗效能的運算
  - 由 action creator, reducer 運算
  - 在 component render 時執行
  - 真的需要放在 mapStateToProps 裡，使用 [memoized selector functions](https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector)

行為 | (state) => stateProps | (state, ownProps) => stateProps
----|-----------------------|--------------------------------
mapStateToProps 執行時機 | store state 變更 | store state 變更、stateProps 中任何欄位的不同
component 重新 render 時機 | stateProps 中任何欄位的不同 | stateProps ownProps 中任何欄位的不同

行為＆陷阱

- store state 如果沒有變更，mapStateToProps 是不會執行的。connect 所產生的 component 在 action 轉發時，呼叫 `store.getState()`，並檢查 `lastState === currentState`
- 有需要用到 `ownProps` 才加到參數裡，避免影響更新行為

## mapDispatchToProps

- Redux 中轉發 action 到 store，可透過呼叫 `store.dispatch` ，這是唯一觸發 state 更新的辦法
- 唯有透過 connect 才能存取 store
- React Redux 提供自訂 function 用來觸發 dispatch，這些 function 會成為 component 的 props

轉發的方法

- 手動 dispatch，指名 type
- 加到 mapDispatchToProps 的參數裡，免掉 dispatch 的工，這些 component 的 props 將不會收到 dispatch
- 傳到子 component 供使用

形式

- Function form: 可客製化 dispatch 行為
- Object shorthand form: 易於使用

將 mapDispatchToProps 定義為 function

- TODO

```javascript
const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}
```

將 mapDispatchToProps 定義為 Object

- object 欄位被假定為 action creator

```javascript
const mapDispatchToProps = {
  increment,
  decrement,
  reset
}
```

## 存取 Store

利用 [context](https://reactjs.org/docs/context.html) 讓所有連接過的 component 可以使用

- 使用 [`useStore`](https://react-redux.js.org/api/hooks.md#useStore) Hook
- 提供客製化 context
- 多個 store

## [Hooks](https://react-redux.js.org/api/hooks)

```javascript
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

- 利用 useSelector 擷取資料，等同提供 mapStateToProps 給 connect
  - 回傳值，而非物件
  - action dispatch 時，使用 reference 比較結果
  - ownProps 需由 closure 或 curried selector 才能使用
  - 使用 === reference equality 而非 shallow equality

### Equality Comparisons and Updates

- 與 connect shallow equality 比較方式不同
- 因每次都回傳新的 Object，預設都會重新 render

```javascript
import { shallowEqual, useSelector } from 'react-redux'

const selectedData = useSelector(selectorReturningObject, shallowEqual)
```

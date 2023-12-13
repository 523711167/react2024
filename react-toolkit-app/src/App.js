import Count from "./component/Count";
import Loading from "./component/Loading";
import Calculate from "./component/calculate";
import CountOther from "./component/CountOther";

/**
 * 1.toolkit基本使用
 *      yarn add react-redux @reduxjs/toolkit
 *      对store创建进行优化，自动整合开发工具，中间件.
 *      对reducer创建进行优化，自动整合action和reducer
 *      对mapDispatchToProps函数进行优化，直接返回对象，注意key要和reducer暴露的action名称一致
 *  2.toolkit函数createAsyncThunk使用，用于异步action
 *      创建createAsyncThunk，返回Promise对象，根据Promise状态执行不同的addCase，return返回结果赋值到payload对象
 *  3.Count组件采用Hooks版本，Loading组件采用Props版本
 *  4.toolkit对state进行特殊处理，reducer可以返回新对象，也可以在原对象上修改
 *  5.createReducer的使用 详见calculate.js
 *  6.2.0版本的createSlice 详见countOther.js
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
      <div className="App">
          <Count/>
          <Loading/>
          <Calculate/>
          <CountOther/>
      </div>
  );
}

export default App;

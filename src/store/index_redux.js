// import { createStore } from 'redux';
import { createStore } from './myCreateStore';

const initial = {
  supNum: 10,
  oppNum: 5,
};
// 管理员：修改store容器中的公共状态
const reducer = function reducer(state = initial, action) {
  // state: 存储store容器中的公共状态，最开始没有的时候，赋值初始状态值initial
  // action: 每一次基于dispatch派发的时候，传递进来的行为对象要求必须具备type属性，存储派发的行为标识
  // 基于派发的行为标识，修改store容器中的公共状态信息
  const newState = { ...state };
  if (action.type === 'VOTE_SUP') {
    newState.supNum++;
  }
  if (action.type === 'VOTE_OPP') {
    newState.oppNum++;
  }
  // return的内容，会整体替换store容器中的内容
  return newState;
};

/*
  第一次派发在redux内部执行，会把initial的值赋值给state.
  dispatch({ type: ****** })
 */
// 每一次dispatch派发，都会把reducer执行

// 创建store公共容器
const store = createStore(reducer);

export default store;

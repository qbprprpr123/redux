// 实现redux的部分源码
export const createStore = (reducer) => {
  // reducer必须是一个函数
  if (typeof reducer !== 'function') {
    throw new Error('Expected the root reducer to be a function');
  }
  // 存放公共状态,初始必须是undefined
  let state;
  // 事件池
  const listeners = [];

  // 获取公共状态
  const getState = () => state;
  // 向事件池中加入让组件更新的方法
  const subscribe = (listener) => {
    // 规则校验
    if (typeof listener !== 'function') {
      throw new TypeError('Expected the listener to be a function');
    }
    // 把传入的让组件更新的方法加入到事件池中，需要做去重处理
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }

    // 返回一个从事件池中移除方法的函数
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  // 派发任务通知reducer执行
  const dispatch = (action) => {
    // action必须是一个对象
    if (Object.prototype.toString.call(action) !== '[object Object]') {
      throw new Error('Actions must be plain objects');
    }
    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined type property');
    }

    // reducer执行，传递：公共状态、行为对象，接收执行的返回值，替换公共状态
    state = reducer(state, action);

    // 当状态更改，还需要把事件池中的方法执行
    listeners.forEach((listener) => listener());

    return action;
  };

  const randomString = () =>
    Math.random().toString(36).substring(7).split('').join('.');
  // redux内部会默认进行一次dispatch派发，目的：给公共容器中的状态赋初始值
  dispatch({
    type: `@@redux/INIT${randomString()}`,
  });

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const combineReducers = (reducers) => {
  // reducers是一个对象，以键值对存储了：模块名 & 每个模块的reducer

  //   reducersKeys: ['vote', 'personal']
  const reducersKeys = Reflect.ownKeys(reducers);
  // 返回一个合并的reducer
  // 每一次dispatch派发，都是把这个reducer执行
  // state就是redux容器中的公共状态
  // action就是派发时候传递进来的行为对象
  return function reducer(state = {}, action) {
    // 把reducers中的每一个reducer（每个模块的reducer）执行
    // 把对应模块的状态/action行为状态传递进来，返回的值替换当前模块下的状态
    const nextState = {};
    reducersKeys.forEach((key) => {
      // reducer: 每个模块的reducer
      const reducerFn = reducers[key];
      nextState[key] = reducerFn(state[key], action);
    });
    return nextState;
  };
};

export default combineReducers;

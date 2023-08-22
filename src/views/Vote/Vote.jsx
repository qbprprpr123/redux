import React, { useContext, useState, useEffect } from 'react';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import Personal from './Personal';
import ThemeContext from '../../ThemeContext';

const Vote = () => {
  const { store } = useContext(ThemeContext);
  // 获取容器中的公共状态
  const { supNum, oppNum } = store.getState().vote;

  const [num, setNum] = useState(0);
  const update = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    // 组件第一次渲染完成后，把让组件更新的方法，放在store中
    // 返回的unsubscribe方法执行，可以把放到store的方法移除
    const unsubscribe = store.subscribe(update);
    return () => {
      // 在上一次组件释放的时候，把上一次放在store中的方法移除
      // 保证update的上级上下文是最新的闭包「num是最新的状态信息」
      unsubscribe();
    };
  }, [num]);

  return (
    <div>
      <h2>React很好学</h2>
      <span>{supNum + oppNum}</span>
      <VoteMain />
      <VoteFooter />
      <Personal />
    </div>
  );
};

export default Vote;

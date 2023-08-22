import { Button } from 'antd';
import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import action from '@/store/actions';

// 点击按钮派发任务，通知reducer执行传递的action行为对象
const VoteFooter = () => {
  const { store } = useContext(ThemeContext);

  console.log('store', store);
  return (
    <div>
      <Button
        type='primary'
        onClick={() => store.dispatch(action.vote.support())}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => store.dispatch(action.vote.oppose())}
      >
        反对
      </Button>
    </div>
  );
};

export default VoteFooter;

import React, { useContext } from 'react';
import { Button } from 'antd';
import ThemeContext from '@/ThemeContext';

const Personal = () => {
  const { store } = useContext(ThemeContext);
  const { age } = store.getState().personal;

  const addAgeHandle = () => {
    store.dispatch({
      type: 'PERSONAL_AGE',
      payload: 17,
    });
  };
  return (
    <div>
      <div>
        无关人士年龄：
        {age}
      </div>
      <Button onClick={addAgeHandle}>会变成17岁</Button>
    </div>
  );
};
export default Personal;

import React, { useContext, useState, useEffect } from 'react';

import ThemeContext from '../../ThemeContext';

const VoteMain = () => {
  const { store } = useContext(ThemeContext);
  const { supNum, oppNum } = store.getState().vote;

  console.log(supNum, oppNum);

  const [num, setNum] = useState(0);

  const update = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(update);

    return () => {
      unsubscribe();
    };
  }, [num]);
  return (
    <div>
      <p>
        支持人数：
        {supNum}
      </p>
      <p>
        反对人数：
        {oppNum}
      </p>
    </div>
  );
};

export default VoteMain;

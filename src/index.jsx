import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Vote from './views/Vote/Vote';

// redux
import store from './store/index';
import ThemeContext from './ThemeContext';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <ThemeContext.Provider value={{ store }}>
      <Vote />
    </ThemeContext.Provider>
  </ConfigProvider>,
);

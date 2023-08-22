import { useSelector } from 'react-redux';
import { Button } from 'antd';

const App = () => {
  const counter = useSelector((state) => {
    console.log(state);
  });
  console.log(counter);
  return (
    <div className='app'>
      <header className='App-header'>
        <p>
          <Button type='primary'>123</Button>
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

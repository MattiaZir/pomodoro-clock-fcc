import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer';


const App = () => {
  return (
    <div className='container d-flex align-items-center h-100'>
      <Timer />
    </div>
  );  
};

ReactDOM.render(<App />, document.getElementById('root'));
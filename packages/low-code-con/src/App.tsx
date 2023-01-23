import React, {useEffect} from 'react';
import Index from './pages/visual'
import './App.scss';
function App() {
  // useEffect(() => {
  //   console.log(process.env)
  // }, [])
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;

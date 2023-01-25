import React from 'react';
import Index from './pages/visual'
import './App.scss';
import {useConfigEnv} from './pages/visual/hooks';
function App() {
  useConfigEnv()
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

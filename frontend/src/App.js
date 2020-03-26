import React from 'react';
//import {useState} from 'react';

//import Header from './Header';
import './global.css';

import Routes from './routes';

/** JSX (Javascript XML) 
function App() {
  const [counter, setCounter] = useState(0);

  //useState() retorna um array bidimensional: [valor, funçãoAtualização]
  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/

function App(){
    return(
      <Routes />
    );
}

export default App;
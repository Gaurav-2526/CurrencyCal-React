import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputCurrency from './InputCurrency';
import OutputCurrency from './OutputCurrency'
function App() {
  const [inputCurrency , setInputCurrency] = useState('Euro');
  const [inputVal , setInputVal] = useState(0);

  function setCurrency(currency){
      setInputCurrency(currency);
  }

  function setVal(val){
     setInputVal(val);
  }
  return (
    <div>
<h1>Currency Calculator</h1>
    <div className="App">
      <InputCurrency setCurrency={setCurrency} setVal={setVal}></InputCurrency>
      <OutputCurrency inputCurrency={inputCurrency} inputVal={inputVal}></OutputCurrency>
      </div>
      </div>
  );
}

export default App;

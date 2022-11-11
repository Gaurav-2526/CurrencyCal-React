import {React , useState} from "react";
function OutputCurrency({inputCurrency,inputVal}){
    
    const [currency, setCurrency] = useState('Euro');
    const handleChange = (e) => {
      setCurrency(e.target.value);
      };
    return(
        <div id="box">
        <select id="currency" onChange={handleChange}>
        <option value="Euro">Euro</option>
        <option value="US Dollar">US Dollar</option>
        <option value="Indian Rupees">Indian Rupees</option>
        <option value="Japanese Yen">Japanese Yen</option>
        <option value="Canadian Dollar">Canadian Dollar</option>
        </select>
        <br/>
        <input id = "output"type="text" value={convert(inputCurrency,inputVal,currency)} disabled/>
        </div>
    )
    
}

function convert(inpCurrency, inpCurrValue, outCurrName) {
    if (inpCurrency === 'Euro') {
      return euroToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency ==='Indian Rupees') {
      return inrToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === 'US Dollar') {
      return usdToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === 'Canadian Dollar') {
      return canadaToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === 'Japanese Yen') {
      return yenToCurrency(inpCurrValue, outCurrName);
    }
    return inpCurrValue;
  }

  function yenToCurrency(inpCurrValue, outCurrName){
    switch (outCurrName) {
      case 'Indian Rupees':
        return inpCurrValue * 0.55835;
      case 'Euro':
        return inpCurrValue * 0.00683;
      case 'Canadian Dollar':
        return inpCurrValue * 0.0092;
      case 'US Dollar':
        return inpCurrValue * 0.00681;
    }
    return inpCurrValue;
  }

  function canadaToCurrency(inpCurrValue, outCurrName){
    switch (outCurrName) {
      case 'Indian Rupees':
        return inpCurrValue * 60.6907;
      case 'Euro':
        return inpCurrValue * 0.74189;
      case 'Japanese Yen':
        return inpCurrValue * 108.682;
      case 'US Dollar':
        return inpCurrValue * 0.74048;
    }
    return inpCurrValue;
  }

  function usdToCurrency(inpCurrValue, outCurrName) {
    switch (outCurrName) {
      case 'Indian Rupees':
        return inpCurrValue * 81.9616;
      case 'Euro':
        return inpCurrValue * 1.00191;
      case 'Japanese Yen':
        return inpCurrValue * 146.773;
      case 'Canadian Dollar':
        return inpCurrValue * 1.35026;
    }
    return inpCurrValue;
  }


  function euroToCurrency(inpCurrValue, outCurrName) {
    console.log(outCurrName);
    switch (outCurrName) {
      case 'US Dollar':
        return inpCurrValue * 0.99792;
      case 'Canadian Dollar':
        return inpCurrValue * 1.34746;
      case 'Japanese Yen':
        return inpCurrValue * 1.79034;
      case 'Indian Rupees':
        return inpCurrValue * 81.7915;
    }
    return inpCurrValue;
  }

  function inrToCurrency(inpCurrValue, outCurrName) {
    switch (outCurrName) {
      case 'US Dollar':
        return inpCurrValue * 0.0122;
      case 'Euro':
        return inpCurrValue * 0.01222;
      case 'Japanese Yen':
        return inpCurrValue * 1.79034;
      case 'Canadian Dollar':
        return inpCurrValue * 0.01647;
    }
    return inpCurrValue;
  }
export default OutputCurrency

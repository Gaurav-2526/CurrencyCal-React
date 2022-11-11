import React from "react";

function InputCurrency({setCurrency, setVal}){

    return(
        <div id="box">
            <select onChange={e => setCurrency(e.target.value)}>
            <option>Euro</option>
            <option>US Dollar</option>
            <option>Indian Rupees</option>
            <option>Japanese Yen</option>
            <option>Canadian Dollar</option>
            </select>
            <br/>
        <input type="text" onChange={e => setVal(e.target.value)}/>
        </div>
    );
}
export default InputCurrency
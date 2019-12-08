import {useState} from 'react';

function useInputState(initialVal = ""){
    const [value,changeValue] = useState(initialVal);
    let handelChange = (e)=>{
        changeValue(e.target.value);
    }
    let reset = ()=>{
        changeValue("");
    }
    return [value,handelChange,reset];
}

export default useInputState;
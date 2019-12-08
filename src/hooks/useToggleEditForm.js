import {useState} from 'react';

function useToggleEditForm(initState = false){
    const [state,toggleState] = useState(initState);
    let changeState = ()=>{
        toggleState(!state);
    }
    return [state,changeState];
}

export default useToggleEditForm;
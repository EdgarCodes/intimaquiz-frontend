import {useState} from "react";

const useInitialVal:any = (initialVal:any) => {
    const [value, setValue] = useState(initialVal);

    const handleChange = (evt:any) =>{
        setValue(evt.target.value);
    }

    const reset = () =>{
        setValue("");
    }

    return [value, handleChange, reset];
}

export default useInitialVal
import { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer"
import item from "./item"


const itemDetail = ({product}) => {
    const [count, setCount] = useState (0);

    const handleClick = (value) => {
        setCount(value);
        
    }

    return (
        <>
        <item product ={product}/>
        <button onClick={handleClick}>-</button>
        <h4>cantidad de click{count}</h4>
        <button onClick={handleClick}>+</button>
        </>

    );
}

export default itemDetail;
import { useState } from "react";

const MapComponent = () => {

    const [products, setProducts] = useState 

    setTimeout(() => {
        setProducts([
            {id: 1, name:'Vestido', description: 'string', stock:'number'},
            {id: 2, name:'Sweater', description: 'string', stock:'number'},
            {id: 3, name:'Remera', description: 'string', stock:'number'}
        
        ])
    }, 5000)

//const prom = new Promise ((resolve, reject)=>{
    //setTimeout(()=>{
      //  resolve(products);
   // }, 3000)
//});

//prom.then((result)=>(console.log(result)))





return (
    <>
    <h1>mi component</h1>
    <ul>
    {products.map((product) => (
        <ul>
        <li key={product.id}>
            <h3>{product.name}</h3>
            </li>
        </ul>
    ))}
    </ul>
   
    </>
)
}

export default MapComponent;

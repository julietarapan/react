import { useState } from "react";

const MapComponent = () => {

    const [products, setProducts] = useState 

    setTimeout(() => {
        setProducts([
            {id: 1, name:'Vestido', description: 'vestido', stock:'1'},
            {id: 2, name:'Sweater', description: 'sweater', stock:'2'},
            {id: 3, name:'Remera', description: 'remera', stock:'1'}
        
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

import './ItemListContainer.css';
import Container  from 'react-bootstrap/Container';
import { useEffect, useState, useParams } from 'react';
import itemList from './itemList';
import item from "./item"
import { getProducts } from '../utilis/products';


const ItemListContainer = ({ greeting }) => {
    const {categoryName} = useParams ();
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        console.log(categoryName)
    }, {categoryName})

    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))

    }, [])

    return (
        <Container>
        <h1> Productos </h1>
        <h3 className="greeting">{greeting}</h3>
        <itemList products= {products}/>

        </Container>
    );
   
}

export default ItemListContainer;
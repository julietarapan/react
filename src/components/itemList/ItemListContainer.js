import './ItemListContainer.css';
import Container  from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../../utilis/products';
import ItemList from './itemList';

const ItemListContainer = ({ greeting }) => {
    const {categoryName} = useParams ();
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        console.log(categoryName)
    }, [categoryName])

    useEffect(() => {
        getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))

    }, [])

    return (
        <Container>
        <h1> Productos </h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList products= {products}/>

        </Container>
    );
   
}

export default ItemListContainer;
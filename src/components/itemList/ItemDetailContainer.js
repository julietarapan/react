import { useEffect } from "react";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        getProduct(id)
        .then((data) => {
            setProduct 
        })
        .catch(error => console.warn(error))
    }, [id])

    console.log(product);

    return (
        <Container>
            <h1>detalle producto</h1>
            <itemDetail product ={product}/>
        </Container>
    )

}

export default ItemDetailContainer;
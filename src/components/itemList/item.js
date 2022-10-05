
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const item = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.pictureurl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            $ {product.price}
          {product.description}
          </Card.Text>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Button variant="primary">
          <link>
            ver detalle
          </link>
          </Button>
        </Card.Body>
      </Card>
    );
}


export default item;

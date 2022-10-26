import Item from './item';

const itemList = ({products}) => {
    return (
         < div className='itemList'>
         {products.map((product)=> (
            <Item key={product.id} product={product}/>
         ))}
        </div> 
       
    );
}

export default itemList;
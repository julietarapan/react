import item from './item';

const itemList = ({products}) => {
    return (
         < div className='itemList'>
         {products.map((product)=> (
            <item key={product.id} product={product}/>
         ))}
        </div> 
       
    );
}

export default itemList;
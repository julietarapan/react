export const products = [
    {id: 1, tittle:'Vestido', description: 'string', price: 100, pictureurl: 'https://www.clara.es/medio/2021/05/05/vestido-rojo-fluido-de-shein-2_6beb0adf_800x1143.jpg', stock:'number'},
    {id: 2, tittle:'Sweater', description: 'string', price: 100, stock:'number'},
    {id: 3, tittle:'Remera', description: 'string', price: 100, stock:'number'}
        
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
        
    })
    return promise
};

export const getProduct = (id) =>{
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout(() => {
            return resolve(result);
        })
        
    })

    return promise

};
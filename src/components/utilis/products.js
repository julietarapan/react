export const products = [
    {id: 1, tittle:'Vestido', description: 'vestido rojo', price: 100, pictureurl: 'https://www.clara.es/medio/2021/05/05/vestido-rojo-fluido-de-shein-2_6beb0adf_800x1143.jpg', stock:'1'},
    {id: 2, tittle:'Sweater', description: 'sweater', price: 100, pictureurl: 'https://images.urbndata.com/is/image/Anthropologie/4114326950074_015_b?$an-category$&qlt=80&fit=constrain', stock:'1'},
    {id: 3, tittle:'Remera', description: 'remera', price: 100, pictureurl:'https://http2.mlstatic.com/D_NQ_NP_736396-MLA45845301055_052021-W.jpg' , stock:'2'}
        
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
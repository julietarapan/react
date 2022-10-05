const exiteError = false;

const MyComponent = ({ value, name, saludar, children }) => {


  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 0, name: 'Pizza' }) 
    }, 1000)
  })

  console.log(task); 
  task
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.warn(error);
    })
    .finally(() => {
      console.log('Promesa finalizada');
    })

  return (
    <>
      <h1> mi componente {name}</h1>
      {children}
    </>
  )
};

export default MyComponent;
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapComponent from './components/MapComponent';
import ItemListContainer from './components/itemList/ItemListContainer';



function App() {
  return (
    <>
    <NavBar />
      <ItemListContainer greeting={'Las Rapan'}/>
      
    </>
   
  );
}

export default App;

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return <>
  <NavBar></NavBar>
  <ItemListContainer greeting={"Listado de productos"}></ItemListContainer>
  
  </>;
}

export default App;

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import AlertMsg from "./components/AlertMsg/AlertMsg";
import BannerHome from "./components/BannerHome/BannerHome";

function App() {
  return <>
  <NavBar></NavBar>
  <AlertMsg></AlertMsg>
  <BannerHome></BannerHome>
  <ItemListContainer></ItemListContainer>
  </>;
}

export default App;

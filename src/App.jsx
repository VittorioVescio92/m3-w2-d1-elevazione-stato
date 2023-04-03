import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyHero from "./components/MyHero";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

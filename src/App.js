import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";

function App() {

  //Não seria necessário passar o id do produto lá no path ?
  // let { beerId } = useParams();

  return (
    <div className="App">
      

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/beers"} element={<Beers />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        <Route path={"/beers/:id"} element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;

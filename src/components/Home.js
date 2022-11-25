import "../../src/App.css";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import beers from '../../src/assets/beers.png'
import newBeer from '../../src/assets/new-beer.png'
import randomBeer from '../../src/assets/random-beer.png'


export default function Home() {


  return (
    
    <ListGroup >
        <p>
          <Link to="/beers">
            <img
              src={beers}
              width="100%"
              height="20%"
              className="image"
              alt="Home logo"
            />
            
          </Link>
          <h3 className="img-home">All Beers</h3>
          <p className="img-home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lectus pretium mi interdum tincidunt. 
            Pellentesque cursus leo turpis, non sollicitudin massa aliquam in. Nunc non volutpat nulla. 
          </p>
        </p>
        <p>
          <Link to="/random-beer">
            <img
                src={randomBeer}
                width="100%"
                height="20%"
                className="image"
                alt="Home logo"
              />
          </Link>
          <h3 className="img-home-random">Random Beer</h3>
          <p className="img-home-text">
            Suspendisse viverra cursus turpis, in bibendum mi varius ac. Sed id magna dolor. 
            Donec venenatis sed ex ac viverra. Etiam posuere tempus tellus efficitur ultricies. 
          </p>
        </p>
        <p>
          <Link to="/new-beer">
            <img
                src={newBeer}
                width="100%"
                height="20%"
                className="image"
                alt="Home logo"
              />
          </Link>
          <h3 className="img-home">New Beer</h3>
          <p className="img-home-text">
            Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
          </p>
        </p>
    </ListGroup>
  );
}

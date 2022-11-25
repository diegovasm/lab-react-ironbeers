import Header from "./header/Header";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Container, ListGroup } from "react-bootstrap";

function Beers(){

    const[beerList, setBeerList] = useState([]);
    const[fetching, setFetching] = useState(true);

    useEffect(() => {

        axios.get("https://ih-beers-api2.herokuapp.com/beers")
             .then(response => 
                    setBeerList(response.data),
                    setFetching(false))
             .catch((error) => console.log(error))


    }, [])

    

    const allBeers = beerList.map((beer) => {


       return(
            <ListGroup.Item key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                    <img 
                        src={beer.image_url}
                        width="20%"
                        height="20%"
                        className="image"
                        alt="Home logo"
                        />
                    <p>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </p>
                </Link>
            </ListGroup.Item>
       )
    })

    return(

        <Container>
            <Header />
            <ListGroup variant="flush">
                
                {allBeers}
            
            </ListGroup>
        </Container>

    );

}

export default Beers
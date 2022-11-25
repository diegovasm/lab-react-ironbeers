import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "./header/Header";

function BeerDetails(){

    const { id } = useParams();
    const [beer, setBeer] = useState({});
    const [fetching, setFetching] = useState(true);


    useEffect(() =>{

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
             .then(response => 
                setBeer(response.data),
                setFetching(false))
             .catch((error) => console.log(error))

    }, [id])

    return(

        <Card style={{ width: '100%' }}>
        <Header />
        <Card.Img variant="top" src={beer.image_url} />
        <Card.Body>
          <Card.Text> {beer.name} </Card.Text>
          <Card.Text> {beer.tagline} </Card.Text>
          <Card.Text> {beer.first_brewed}  </Card.Text>
          <Card.Text> {beer.attenuation_level} </Card.Text>
          <Card.Text> {beer.description} </Card.Text>
          <Card.Text> {beer.contributed_by} </Card.Text>
          <Card.Text> {beer.brewers_tips} </Card.Text>
        </Card.Body>
      </Card>
    )

}

export default BeerDetails
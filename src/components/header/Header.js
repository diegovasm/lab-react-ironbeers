import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeDefault from '../../assets/home-default.png'

function Header(){

    return(

        <div>
            <Navbar style={{paddingBottom: "0", paddingTop:"0"}}>
                    <Link to="/">
                        <img
                            src= { homeDefault }
                            width="100%"
                            height="100%"
                            className="img-home-nav"
                            alt="Home logo"
                        />
                    </Link>
            </Navbar>
        </div>
    );   
}

export default Header;
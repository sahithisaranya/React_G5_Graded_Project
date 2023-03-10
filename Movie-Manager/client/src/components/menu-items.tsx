import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MenuItems() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#movies-in-theaters">Movies in theaters</Nav.Link>
                    <Nav.Link href="#coming-soon">Coming soon</Nav.Link>
                    <Nav.Link href="#top-rated-indian">Top rated Indian</Nav.Link>
                    <Nav.Link href="#top-rated">Top rated movies</Nav.Link>
                    <Nav.Link href="#favorites">Favorites</Nav.Link>
                </Nav>
                <Form >
                    <Button>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>

                    <FormControl type="text" placeholder="Search movie" className="ml-2 mr-sm-2" />
                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MenuItems;
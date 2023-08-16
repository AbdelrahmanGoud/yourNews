import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoim from '../image/yournews-low-resolution-logo-color-on-transparent-background.png';
import logo2 from '../image/yournews-low-resolution-logo-color-on-transparent-background.png';
import { Link } from 'react-router-dom';

function Navpages() {

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" fixed-top ">
          <Container fluid>
            <Link to='/'><img src={logoim} className='img-fluid logonav ' alt='logo-nav'></img></Link>
        
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <img src={logo2} className='img-fluid' alt='logo-nav'></img>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to='/' className='nav-link' >Home</Link>
                  <Link to='Uae' className='nav-link' >Uae</Link>
                  <Link to='Saudi' className='nav-link' >Saudi_Arabia</Link>
                  <Link to='Us' className='nav-link' >Us</Link>
                  <Link to='Cars' className='nav-link' >Cars&Mobile-tech</Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <div className='icon-nav pt-4'>
          <span className='icon-one px-2'><a href='https://github.com/AbdelrahmanGoud'><i class="fa-brands fa-github foot-i"></i></a></span>
          <span className='icon-one px-2'><a href='https://goudadev.netlify.app/'><i class="fa-solid fa-earth-africa"></i></a></span>
          <span className='icon-one px-2'><a href='https://www.linkedin.com/in/abdelrhman-ahmed-25635527b'><i class="fa-brands fa-linkedin icon-in-fot"></i></a></span>
          <span className='icon-two px-2'><a href="mailto:abdoahmed132001@gmail.com"><i class="fa-regular fa-envelope foot-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://wa.me/+201148952582'><i class="fa-brands fa-whatsapp foot-i"></i></a></span>
          <span className='icone-four px-2'><a href='tel:01148952582'><i class="fa-solid fa-phone foot-i"></i></a></span>
        </div>  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navpages;
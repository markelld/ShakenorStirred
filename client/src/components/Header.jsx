// import { Link } from "react-router-dom"; 
//import Search from "./Search" 
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'  
import { Link } from "react-router-dom";
 


function Header(props) {
  
  
  
  return (
    // <nav className="navbar"> 
    //   <Link className="hometext"  to="/">Shaken or Stirred?</Link> 
    //   <Link className="hometext" to="/new">New Cocktail</Link> 
    //   <Link className="hometext" to="/contact">Contact</Link> 
    // {/* <Search classname="searchbar"
    //   handleChange={props.handleChange} 
    //   search={props.search} /> */}
    //  
    <Navbar expand="lg" className="color-nav" >
      <LinkContainer to="/">
        <Navbar.Brand className="color-nav">Shaken or Stirred?</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/new">
            <Nav.Link>New Recipe</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline
          handleChange={props.handleChange}
          className="mr-sm-2"
        >
          <FormControl
            type="text"
            placeholder="Search"
      
            search={props.search}
            type="text"
            name="search"
            value={props.search}
            onChange={(e) => props.handleChange(e)}
          />
          <Button variant="danger" >Search</Button>
          
        </Form>
      </Navbar.Collapse>
      {props.searchResults && props.searchResults.map((cocktail, index) => {
          return (
        <div key={index}>
            <Link to={`/recipe/${cocktail.id}`}>{cocktail.fields.name}</Link></div>
          )
        })
           
      }
  </Navbar>
  )
} 
    

export default Header;  

{/* <Navbar  expand="lg" className="color-nav" > 
    <LinkContainer to="/"> 
      <Navbar.Brand className="color-nav">Shaken or Stirred?</Navbar.Brand>
    </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"> 
      <LinkContainer to="/new">
        <Nav.Link>New Recipe</Nav.Link>    
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>    
      </LinkContainer>
    </Nav> 
      <Form inline 
        handleChange={props.handleChange} 
        className="mr-sm-2"
        >
        <FormControl 
        type="text" 
        placeholder="Search" 
          
        search={props.search} 
        type="text"
        name="search"
        value={props.search} 
        onChange={(e) => props.handleChange(e)}
        />
        <Button variant="outline-success" >Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
 */}

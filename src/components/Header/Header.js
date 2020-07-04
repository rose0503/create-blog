import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from "./Logo";
import './Header.css'
import About from '../About/About'
import Home from '../Home/Home'
import Blog from '../Blog/Blog'

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Router>
      <Navbar color="light" light expand="md" className="nav">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <Logo />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/blog">Blog</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about">About</Link>
                </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
                    
      <Switch>
        <Route path="/about" component={About}>
        
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
   
  );
};

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Blog() {
//   return <h2>Users</h2>;
// }

export default Header;

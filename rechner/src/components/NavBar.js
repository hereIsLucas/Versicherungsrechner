import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';
import v from '../images/letter-v.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <ul>
      <Link to="/">
      <img src={v} alt="Button" id="navbarIMG" />
      </Link>  
      </ul> 
      <ul>
        <CustomLink to="../VrMainPage">Calculator</CustomLink>
      </ul>
      <ul>
        <CustomLink to="../ContactUs">Contact Us</CustomLink>
      </ul>
      <ul>
        <CustomLink to="../AboutUs">About Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
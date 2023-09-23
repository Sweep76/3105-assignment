import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Notepad Leaf Journal</h1>
      <div className="links">
        <Link to="/registerform" >Register Now</Link>
        <Link to="/">Note Area</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
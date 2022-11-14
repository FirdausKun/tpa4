import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="logo">
          Firdaus
        </Link>
        <div className="right-nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

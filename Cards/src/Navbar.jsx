import { IoCallOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <nav className="navb">
        <ul>
          <li>
            <IoCallOutline />
            Call Us: (+91) 990-782-2420
          </li>
        </ul>
        <a href="#" className="log">login/register</a>
      </nav>
    </>
  );
}

export default Navbar

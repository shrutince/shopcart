import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-4 py-2">

      <div className="flex flex-row justify-between items-center">
        <NavLink to="/">
          <div>
            <img src="../logo.png" className="h-14" alt="Logo" />
          </div>
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-white font-semibold hover:text-gray-200">
            Home
          </NavLink>

          <NavLink to="/cart" className="text-white font-semibold hover:text-gray-200 flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;


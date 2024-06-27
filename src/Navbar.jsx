import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-yellow-400 p-4 text-black">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">
            Fake eCommerce Shop
          </Link>
          <div className="flex space-x-4">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-lg font-bold hover:text-white focus:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-lg font-bold hover:text-white"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
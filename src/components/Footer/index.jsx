import Brand from "../Brand/index";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 mt-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Brand & Description */}
        <div>
          <Brand isHeader={false} />
          <p className="text-gray-600 mt-4">
            CLEAN-OUT is an integrated platform to use your wastes as currency.
            We are for the people, planet, and prosperity.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"} className="text-gray-600 hover:text-green-600">
                FAQs
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Details */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Contact Details
          </h4>
          <p className="text-gray-600">No 4, Orogun Ibadan, Oyo State</p>
          <p className="text-gray-600">info@cleanout.ng</p>
          <p className="text-gray-600">+234 (816) 990 9614</p>
        </div>

        {/* Section 4: Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h4>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} CLEAN-OUT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

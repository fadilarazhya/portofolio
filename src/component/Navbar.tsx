import { useState, useEffect } from "react";
import Toggle from "./Toggle";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-6">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-teal-500">
          Fadila Razhya
        </span>
        <div className="flex items-center md:hidden">
          {/* Burger Menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Toggle />
        </div>
        <div
          className={`${
            isMenuOpen ? "absolute left-0 top-full w-full" : "hidden"
          } md:relative md:block md:w-auto`}
          id="navbar-sticky">
          <ul className="flex flex-col items-center space-y-4 border border-gray-100 bg-gray-50 p-6 font-medium dark:border-gray-700 dark:bg-gray-900 md:flex-row md:space-x-8 md:space-y-0 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 dark:text-white dark:hover:text-teal-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-500">
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block px-3 py-2 text-gray-900 dark:text-white dark:hover:text-teal-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-500">
                Project
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="block px-3 py-2 text-gray-900 dark:text-white dark:hover:text-teal-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-500">
                Tools
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 dark:text-white dark:hover:text-teal-500 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-teal-500">
                Contact
              </a>
            </li>
            <li className="hidden md:flex">
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

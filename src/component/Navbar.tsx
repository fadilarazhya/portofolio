import { useState } from "react";
import Toggle from "./Toggle";
// import { DarkThemeToggle } from "flowbite-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="relative sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
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
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"></path>
            </svg>
          </button>
          {/* <DarkThemeToggle /> */}
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
              {/* <DarkThemeToggle /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

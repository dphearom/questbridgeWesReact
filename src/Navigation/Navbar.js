import React from "react";
import logo from "./QBLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-zinc-100 mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row items-center">
              <div>
                <Link to="/">
                  <img
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block h1"
                  alt="Wesleyan Questbridge Logo"
                  />
                </Link>
              </div>
              <div className="relative md:text-xl text-black align-middle font-bold leading-relaxed inline-block mr-4 px-1 whitespace-nowrap uppercase sm:text-sm">
                Wesleyan Questbridge
              </div>
            </div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/about"
                >
                  <i className="text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/blog"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Alumni's Insights</span>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/contact"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

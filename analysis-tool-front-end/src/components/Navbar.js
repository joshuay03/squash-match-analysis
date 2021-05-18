import React from 'react';
import logo from '../Squash-Australia-Positive-Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-green-700 mb-3">
        <div className="container justify-between px-4 mx-auto flex flex-wrap">
          <div className="w-full relative flex lg:w-auto lg:static lg:block">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} className="h-20 mr-10" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 ml-auto mborder border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-initial mr-auto items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item lg:border-r border-white">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-yellow-300"
                  href="/"
                >
                  <span className="lg:mr-5 lg:ml-5">Home</span>
                </a>
              </li>
              <li className="nav-item lg:border-r border-white">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-yellow-300"
                  href="#"
                >
                  <span className="lg:mr-5 lg:ml-5">Analyse</span>
                </a>
              </li>
              <li className="nav-item lg:border-r border-white">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-yellow-300"
                  href="/annotate"
                >
                  <span className="lg:mr-5 lg:ml-5">Annotate</span>
                </a>
              </li>
              <li className="nav-item lg:border-r border-white">
                <a
                  className="lg:px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:text-yellow-300"
                  href="#"
                >
                  <span className="lg:mr-5 lg:ml-5">Reports</span>
                </a>
              </li>
              </ul>

          </div>
          <ul className="hidden lg:block pt-7">
          <li className="nav-item sm:pb-5 lg:pb-0 ml-auto">
            <a
              className="lg:px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-white hover:text-yellow-300"
              href="#"
            >
              <span className="lg:mr-5 lg:ml-5"><FontAwesomeIcon icon={faUserCircle} /> </span>
            </a>
          </li>

        </ul>
        </div>

      </nav>
    </>
  );
}

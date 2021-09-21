import Toggle from "../Toggle";
import React, { useState } from "react";

import Link from "next/link";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex">
        <Toggle />
        <div>
          <span className="ml-2 text-base">Aakanksha</span>
          <span className="text-grey">.</span>
          <span className="text-purple-500 text-base">Dhurandhar</span>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 justify-end">
          <div className="flex items-top justify-end h-7">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <a
                    href="#"
                    className="  hover:text-purple-500 px-3 py-2 rounded-md text-base "
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="  hover:text-purple-500 px-3 py-2 rounded-md text-base "
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="  hover:text-purple-500 px-3 py-2 rounded-md text-base "
                  >
                    Blogs
                  </a>

                  <a
                    href="#"
                    className="  hover:text-purple-500 px-3 py-2 rounded-md text-base "
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-1 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-500 inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="  space-y-1 sm:px-3">
                <a
                  href="#"
                  className="  hover:text-purple-500 block px-3 py-2 rounded-md text-base font-sm"
                >
                  About
                </a>

                <a
                  href="#"
                  className="  hover:text-purple-500 block px-3 py-2 rounded-md text-base font-sm"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="  hover:text-purple-500 block px-3 py-2 rounded-md text-base font-sm"
                >
                  Blogs
                </a>

                <a
                  href="#"
                  className="  hover:text-purple-500 block px-3 py-2 rounded-md text-base font-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;

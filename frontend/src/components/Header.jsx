import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(()=>{
        localStorage.setItem("theme",isDarkMode? "dark":"light");
        const selectedTheme = localStorage.getItem("theme");
        if(selectedTheme){
            document.body.classList.add(selectedTheme);

        }else if(window.matchMedia("prefers-color-scheme: dark")){
            document.body.classList.add("light");
        }
        else{
            document.body.classList.add("light");
        }
    },[]);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle function to switch the theme
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
    <div>
        <header id="navbar" class="header-area sticky top-0 z-50 shadow-md  bg-transparent transition duration-200 bg-background" >
      <div class="container mx-auto px-4">
                <div class="col-12 flex justify-between items-center">
                <nav className="main-nav flex justify-between w-full">
                    <div className="container mx-auto px-4">
                        <div className="relative flex items-center justify-between">
                            {/* Logo with responsive size */}
                            <Link className="inline-block" to="/">
                                <img
                                    className="rounded-full w-36 sm:w-24 md:w-48"  // Smaller on mobile, larger on bigger screens
                                    src={`${isDarkMode ? "../images/3.png" : "../images/Logo.png"}`}
                                    alt=""
                                />
                            </Link>

                            <div className="flex items-center justify-end">
                                {/* Navigation Links */}
                                <div className="hidden lg:block mr-10">
                                    <Link className="inline-flex py-2 px-4 mr-4 items-center justify-center text-sm font-medium uppercase hover:text-orange-500" to="/login">
                                        SIGN IN
                                    </Link>
                                    <Link
                                        className="inline-flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-white bg-transparent bg-gradient-to-r from-orange-600 to-orange-300 hover:from-orange-600 hover:to-red-600 transition duration-200 rounded-full"
                                        to="/register"
                                    >
                                        SIGN UP
                                    </Link>
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                    className={`${isDarkMode ? "text-white" : "text-black"} hover:text-orange-500`}
                                >
                                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 16H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3 8H29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M20 24L29 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="flex flex-col justify-center ml-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`${
                        isDarkMode ? 'hidden' : 'inline-flex'
                        } items-center gap-x-2 py-2 px-3 bg-black/30 rounded-full text-sm hover:bg-black/60 focus:outline-none focus:bg-black/60`}
                        data-hs-theme-click-value="dark"
                    >
                        <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        Dark
                    </button>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`${
                        isDarkMode ? 'inline-flex' : 'hidden'
                        } items-center gap-x-2 py-2 px-3 bg-white/40 rounded-full text-sm hover:bg-white/60 focus:outline-none focus:bg-white/60`}
                        data-hs-theme-click-value="light"
                    >
                        <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                        Light
                    </button>
                </div>
                </div>
            </div>
    </header>
    
      {/* --------------------- Mobile Nav ----------------------*/}
      {mobileNavOpen && (
      <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
          <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-gray-600 opacity-20"
          ></div>
          <nav className={`relative flex flex-col justify-start py-7 px-10 w-full h-full bg-background overflow-y-auto`}>
          <div className="flex items-center">
              <Link className="inline-block mr-auto" to="/">
              <img className="h-10" src="casper-assets/logos/casper-logo.svg" alt="" />
              </Link>
               {/* Logo Container */}
              <div className="flex justify-start w-full">
              <a href="/login" className="flex justify-center">
                  <img src={`${isDarkMode ?"../images/3.png" : "../images/Logo.png" }`} alt="Logo" className="w-32 rounded" />
              </a>
              </div>

              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#F86E00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  ></path>
              </svg>
              </button>
          </div>

          <div className="py-12">
              <nav className="mt-10">
                  
              <a
                  className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
                  href="#"
              >
                  <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                  </svg>
                  
                  <span className="mx-3">
                  <Link className="inline-block text-base font-medium uppercase" to="/featured">
                      FEATURED
                  </Link>
                  </span>
              </a>
              <a
                  className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                  href="#"
              >
                  <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  ></path>
                  </svg>
                  <span className="mx-3">
                  <Link className="inline-block text-base font-medium uppercase" to="/solutions">
                      SOLUTIONS
                  </Link>
                  </span>
              </a>
              <a
                  className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                  href="#"
              >
                  <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                  </svg>
                  <span className="mx-3">
                  <Link className="inline-block text-base font-medium uppercase" to="/products">
                      PRODUCTS
                  </Link>
                  </span>
              </a>
              <a
                  className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                  href="#"
              >
                  <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                  </svg>
                  <span className="mx-3">
                  <Link className="inline-block text-base font-medium uppercase" to="/articles">
                      ARTICLES
                  </Link>
                  </span>
              </a>
              </nav>
          </div>
          <div className="mt-auto">
          <Link
          className="flex py-2 px-4 mb-4 items-center justify-center text-sm font-medium uppercase text-orange-500 hover:text-orange-900"
          to="/login"
          >
          SIGN IN
          </Link>
          <Link
          className="flex h-11 py-2 px-4 items-center justify-center text-sm font-medium uppercase text-black hover:text-white bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-full"
          to="/register"
          >
          SIGN UP
          </Link>
           </div>
          </nav>
      </div>

      )}
    </div>
  );
};

export default Header;
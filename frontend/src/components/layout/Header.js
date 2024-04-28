import React, { useRef, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import { logout } from "../../actions/userAction";
const Header = () => {
  const [open, setOpen] = useState(false);

  // ===== responsive navbar
  const navbarToggler = useRef(null);
  console.log(navbarToggler);
 
  const dispatch=useDispatch()
  const navbarCollapse = useRef(null);
  console.log(navbarCollapse);
  const {isAuthenticated}=useSelector(state=>state.user)


  function logoutUser(){
    dispatch(logout())
    
 }


  const toogleBetweenTwo = () => {
    if (open === false) {
      navbarToggler.current.classList.remove("navbarTogglerActive");
      navbarCollapse.current.classList.remove("hidden");

      setOpen(true);
    }
    if (open === true) {
      navbarToggler.current.classList.add("navbarTogglerActive");
      navbarCollapse.current.classList.add("hidden");
      setOpen(false);
    }
  };

  return (
    <>
      <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-primary">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a
                href="/"
                className="navbar-logo block w-full text-white py-5"
              >
           <img src="/13.png" alt="" />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  ref={navbarToggler}
                  onClick={() => toogleBetweenTwo()}
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  ref={navbarCollapse}
                  id="navbarCollapse"
                  className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                >
                  <ul className="blcok lg:flex">
                    <li className="group relative">
                      <a
                        href="/"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-white group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/aboutus"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        About
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/#uses"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                       Uses
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/#team"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Team
                      </a>
                    </li>
                    <li className="group relative">
                      <a
                        href="/contactus"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-white group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Contact
                      </a>
                    </li>
                    <div class="flex">
                 {isAuthenticated?(    <li>
                        <a
                          href="/register"
                          class="  lg:hidden inline-flex items-center justify-center rounded-lg bg-primary py-2 px-4 text-center  text-white transition duration-300 ease-in-out hover:bg-dark shadow-xl sm:px-10"
                        >
                          <span class="text-white">Log Out</span>
                        </a>
                      </li>):    (<> <li>
                        <a
                          href="/login"
                          class="  lg:hidden mx-2 inline-flex items-center justify-center rounded-lg bg-primary py-2 px-6 text-center  text-black transition duration-300 ease-in-out hover:text-primary shadow-xl "
                        >
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login"
                          class="  lg:hidden ml-7 inline-flex items-center justify-center rounded-lg bg-primary py-2 px-6 text-center  text-black transition duration-300 ease-in-out hover:text-primary shadow-xl "
                        >
                          Sign Up
                        </a>
                      </li></>)}
                    
                    </div>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              {
                isAuthenticated?  <button
              onClick={logoutUser}
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-white"
              >
              Log Out
              </button>:
              (
                <>
                  <a
                  href="/login"
                  className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="/register"
                  className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-white"
                >
                  Sign Up
                </a>
                </>
              )
              }
              
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
    
  );
};

export default Header;

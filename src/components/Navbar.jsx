import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiSearch, } from "react-icons/fi"
import {IoClose} from "react-icons/io5"
function Navbar() {
    function showSearchBar() {
        document.querySelector(".search-overlay").classList.contains("hidden")&&
        document.querySelector(".search-overlay").classList.replace("hidden","flex")
    }
    function closeSearchBar() {
        document.querySelector(".search-overlay").classList.contains("flex")&&
        document.querySelector(".search-overlay").classList.replace("flex","hidden")
    }
  return (
    <div className='relative'>
        <nav className='flex justify-between p-3 items-center'>
            <div>
                <img className='w-28' src={require("../img/logo.png")} alt="" />
            </div>
            <div>
                <div className='flex items-center gap-12'>
                    <Link to={"#"} className="flex items-center hover-dropdown">
                        <span>Homepage</span>
                          <FiChevronDown />
                          <ul className='hover-dropdown-list'>
                              <li>
                                  <Link to={"#"}>
                                      Page1
                                  </Link>
                              </li>
                               <li>
                                  <Link to={"#"}>
                                      Page2
                                  </Link>
                              </li>
                          </ul>
                    </Link>
                    <Link to={""} className="flex items-center">
                        <span>Receipe page</span>
                        <FiChevronDown/>
                    </Link>
                    <Link to={""} className="flex items-center">
                        <span>Pages</span>
                        <FiChevronDown/>
                    </Link>
                    <Link to={""} >
                       Buy
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <FiSearch size={30} onClick={showSearchBar} />
                <div className='w-10 h-10 rounded-full'>
                    <img src={require("../img/menu10.png")} className='w-10 h-10 rounded-full' alt="" />
                </div>
            </div>
          </nav>
          
          <div className='absolute top-20 w-full justify-center items-center z-50 h-screen duration-500 transition-all search-overlay hidden'>
              <div className='relative'>
                  <input type="search" placeholder='Search receipe her...' className='p-3 border  w-[600px] outline-none rounded' />
                  <button className='border-none absolute right-0 bg-white rounded text-3xl p-2 text-orange-500'><FiSearch/></button>
              </div>
              <IoClose className='text-3xl absolute top-0 right-2 cursor-pointer ' onClick={closeSearchBar}/> 
          </div>
    </div>
  )
}

export default Navbar
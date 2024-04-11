import React from 'react'
import { Link } from 'react-router-dom'
import {FiChevronDown, FiSearch} from "react-icons/fi"
function Navbar() {
  return (
    <div>
        <nav className='flex justify-between p-3 items-center'>
            <div>
                <img className='w-28' src={require("../img/logo.png")} alt="" />
            </div>
            <div>
                <div className='flex items-center gap-12'>
                    <Link to={""} className="flex items-center">
                        <span>Homepage</span>
                        <FiChevronDown/>
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
                <FiSearch size={30}/>
                <div className='w-10 h-10 rounded-full'>
                    <img src={require("../img/menu10.png")} className='w-10 h-10 rounded-full' alt="" />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
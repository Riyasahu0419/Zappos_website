import React, { useState } from 'react'
import{Link} from "react-router-dom"
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import {FaTimes} from "react-icons/fa"
import { FaSearch } from 'react-icons/fa';
import { IoBagAddOutline } from "react-icons/io5";
import {IoSearchOutline } from "react-icons/io5";

export function Navbar() {

  const [Menu , setMenu]=useState(false)
  
  const toggleMenu=()=>{
    setMenu(!Menu)
  }
  
  return(
    
    <>
  <div className='h-10 bg-sky-100'></div>


    <div className="flex lg:place-content-between   mt-8">

    <div className='flex ml-14 gap-10'>

    <Link to="/">
    <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="" className='w-30'/>
    </Link>

  
  {/* search bar */}

    <div className="search-container  ">
      <div className="input-wrapper hidden  md:flex ">
          <FaSearch className="search-icon" />
          <input
              type="text"
              placeholder="Search for shoes, clothes, etc."
              className="search-input hidden md:block"
          />
      </div>
      <button className="search-button hidden md:block"><b>Search</b></button>
  </div>


    </div>

    <div className='flex mr-10 gap-5  '>

      {/* <div className=''> */}

      <Link className=''>
      <IoSearchOutline size={30} className=" lg:hidden md:hidden "  />
      </Link>

    <Link to="/signin" className=''>
    <HiOutlineUserCircle size={30} />
    </Link>

    <Link to="/mybag">
    <IoBagAddOutline  size={30} />
    </Link>
      {/* </div> */}

    </div>


    {/* menu bar */}

  <div className="md:hidden block  lg:hidden">
  <button className="" onClick={toggleMenu}>
    {Menu ? (
      <FaTimes size={30} />
    ) : (
      <IoMdMenu size={30} />
    )}
  </button>
</div>

{Menu &&(
  // <div className=" bg-white  md:hidden block ">

    <div className="">
    <Link to='/' className="">HOME</Link>
    {/* </div> */}

  </div>
)}

</div>

<div className='flex place-content-between '>
<div className='ml-14 space-x-10 text-lg mt-3 hidden md:block'>
  <Link><b>New</b></Link>
  <Link><b>Women</b></Link>
  <Link><b>Men</b></Link>
  <Link><b>Kids</b></Link>
  <Link><b>Collections</b></Link>
  <Link><b>Brands</b></Link>
  <Link className='text-red-500'><b>Sale</b></Link>
</div>
<div className='mr-10 text-lg hidden md:block'>
  <Link><b>Help & Support</b></Link>
</div>
</div>
<hr className='mt-2' />

    
</>
)
}


// import React, { useState } from 'react'
// import{Link} from "react-router-dom"
// import { HiOutlineUserCircle } from "react-icons/hi2";
// import { IoMdMenu } from "react-icons/io";
// import {FaTimes} from "react-icons/fa"
// import { FaSearch } from 'react-icons/fa';
// import { IoBagAddOutline } from "react-icons/io5";
// import {IoSearchOutline } from "react-icons/io5";

// export function Navbar() {

//   const [Menu , setMenu]=useState(false)
  
//   const toggleMenu=()=>{
//     setMenu(!Menu)
//   }
  
//   return(
    
//     <>
//   <div className='h-10 bg-sky-100'></div>


//     <div className="flex lg:place-content-between   mt-8">

//     <div className='flex ml-14 gap-10'>

//     <Link to="/">
//     <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="" className='w-30'/>
//     </Link>

  
//   {/* search bar */}

//     <div className="search-container  ">
//       <div className="input-wrapper hidden  md:flex ">
//           <FaSearch className="search-icon" />
//           <input
//               type="text"
//               placeholder="Search for shoes, clothes, etc."
//               className="search-input hidden md:block"
//           />
//       </div>
//       <button className="search-button hidden md:block"><b>Search</b></button>
//   </div>


//     </div>

//     <div className='flex mr-10 gap-5  '>

//       {/* <div className=''> */}

//       <Link className=''>
//       <IoSearchOutline size={30} className=" lg:hidden md:hidden "  />
//       </Link>

//     <Link to="/signin" className=''>
//     <HiOutlineUserCircle size={30} />
//     </Link>

//     <Link to="/mybag">
//     <IoBagAddOutline  size={30} />
//     </Link>
//       {/* </div> */}

//     </div>


//     {/* menu bar */}

//   <div className="md:hidden block  lg:hidden">
//   <button className="" onClick={toggleMenu}>
//     {Menu ? (
//       <FaTimes size={30} />
//     ) : (
//       <IoMdMenu size={30} />
//     )}
//   </button>
// </div>

// {Menu &&(
//   // <div className=" bg-white  md:hidden block ">

//     <div className="">
//     <Link to='/' className="">HOME</Link>
//     {/* </div> */}

//   </div>
// )}

// </div>

// <div className='flex place-content-between '>
// <div className='ml-14 space-x-10 text-lg mt-3 hidden md:block'>
//   <Link><b>New</b></Link>
//   <Link><b>Women</b></Link>
//   <Link><b>Men</b></Link>
//   <Link><b>Kids</b></Link>
//   <Link><b>Collections</b></Link>
//   <Link><b>Brands</b></Link>
//   <Link className='text-red-500'><b>Sale</b></Link>
// </div>
// <div className='mr-10 text-lg hidden md:block'>
//   <Link><b>Help & Support</b></Link>
// </div>
// </div>
// <hr className='mt-2' />

    
// </>
// )
// }

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { IoBagAddOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

export function Navbar() {

  const [Menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!Menu);
  }

  return (
    <>
      <div className='h-10 bg-sky-100'></div>

      <div className="flex justify-between items-center px-5 lg:px-14 mt-5">

        {/* Left Section: Logo and Search */}
        <div className='flex items-center gap-10'>
          <Link to="/">
            <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="Logo" className='w-28' />
          </Link>

          {/* Search Bar (Hidden on smaller screens) */}
          
        <div className="search-container hidden lg:flex ">
          <div className=" input-wrapper flex items-center">
         <FaSearch className="search-icon" />
         <input
              type="text"
              placeholder="Search for shoes, clothes, etc."
              className="search-input hidden md:block "
              />
      </div>
      <button className="search-button hidden md:block "><b>Search</b></button>
  </div>
</div>


    

        {/* Right Section: Icons */}
        <div className='flex items-center  gap-5'>
          {/* Mobile search icon */}
          <Link className='lg:hidden'>
            <IoSearchOutline size={30} />
          </Link>

          <Link to="/signin">
            <HiOutlineUserCircle size={30} />
          </Link>

          <Link to="/mybag">
            <IoBagAddOutline size={30} />
          </Link>

          {/* Menu Button (Visible only on smaller screens) */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {Menu ? <FaTimes size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {Menu && (
        <div className="lg:hidden bg-white p-5 space-y-4 text-center">
          <Link to="/" className="block">HOME</Link>
          <Link to="/new" className="block">New</Link>
          <Link to="/women" className="block">Women</Link>
          <Link to="/men" className="block">Men</Link>
          <Link to="/kids" className="block">Kids</Link>
          <Link to="/collections" className="block">Collections</Link>
          <Link to="/brands" className="block">Brands</Link>
          <Link to="/sale" className="block text-red-500">Sale</Link>
          <Link to="/support" className="block">Help & Support</Link>
        </div>
      )}

      {/* Desktop/Tablet Menu */}
      <div className="hidden lg:flex justify-between items-center px-14 mt-4">
        <div className='flex space-x-10 text-lg'>
          <Link to="/new"><b>New</b></Link>
          <Link to="/women"><b>Women</b></Link>
          <Link to="/men"><b>Men</b></Link>
          <Link to="/kids"><b>Kids</b></Link>
          <Link to="/collections"><b>Collections</b></Link>
          <Link to="/brands"><b>Brands</b></Link>
          <Link to="/sale" className='text-red-500'><b>Sale</b></Link>
        </div>
        <div className='text-lg'>
          <Link to="/support"><b>Help & Support</b></Link>
        </div>
      </div>

      <hr className='mt-2' />
    </>
  );
}

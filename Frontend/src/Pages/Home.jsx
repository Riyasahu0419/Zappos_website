import React, { useState } from 'react'
import finalSale from "/finalSale.jpg"
import shose from "/shose.jpg"
import seliper from "/seliper.jpg"
import belly from "/belly.jpg"
import jute from "/jute.jpg"
import man from "/man.jpg"
import women from "/women.jpg"
import mens from "/mens.jpg"
import kid from "/kid.jpg"
import boot from "/boot.jpg"
import New from "/New.jpg"
import bag from "/bag.png"
import black_bag from "/black bag.png"
import mini_bag from "/mini bag.png"
import s1 from "/Screen320.png"
import s2 from "/Screen321.png"
import s3 from "/Screen322.png"
import s4 from "/shoose1.png"
import s5 from "/shoose2.png"
import s6 from "/seliper1.png"
import s7 from "/sliper2.png"
import s8 from "/screen8.png"
import s9 from "/screen9.png"
import s10 from "/screen10.png"
import s11 from "/screen11.png"
import h1 from '/home1.png'

import { Link } from 'react-router-dom'



function Home() {
  const[category, setcatgory]=useState([])


  return (
    <>

    <div className='mx-12 my-8'>
      <Link>
      <img src={h1} alt="" className='w-full' />
      </Link>
    </div>
    
    {/* 1st section */}
      {/* <h1 className='text-2xl lg:ml-36 mt-20  ml-36 '><b>Shop Popular Categories</b></h1>

    <div className=' grid grid-cols-3  lg:grid-cols-6 lg:mx-28 gap-5 p-5'>
      <Link>
        <img src={shose}alt=""  />
        <p className='underline text-center mt-5'>Sale Sneakers</p>
      </Link>

      <Link>
      <img src={seliper} alt="" />
      <p  className='underline text-center mt-5'>Sale Sandals</p> 
      </Link>
      <Link>
      <img src={belly}alt="" />
      <p className='underline text-center mt-5'>Sale Heels</p>
      </Link>

      <Link>
      <img src={jute}alt="" />
      <p className='underline text-center mt-5'>Sale Boots</p>
      </Link>

      <Link>
      <img src={man}alt="" />
      <p className='underline text-center mt-5'>$50 & Under <br />Sale</p>
      </Link>

      <Link>
      <img src={finalSale} alt="" />
      <p className='underline text-center mt-5'>Shop the Sale </p>
      </Link>
    </div> */}


<h1 className='text-2xl lg:ml-36 mt-20  ml-5 font-bold'>
        Shop Popular Categories
      </h1>

      {/* Categories Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 p-5 lg:px-28 lg:py-5'>

        {/* Sale Sneakers */}
        <Link className='flex flex-col items-center'>
          <img src={shose} alt="Sale Sneakers" className='w-full' />
          <p className='underline text-center mt-5'>Sale Sneakers</p>
        </Link>

        {/* Sale Sandals */}
        <Link className='flex flex-col items-center'>
          <img src={seliper} alt="Sale Sandals" className='w-full' />
          <p className='underline text-center mt-5'>Sale Sandals</p>
        </Link>

        {/* Sale Heels */}
        <Link className='flex flex-col items-center'>
          <img src={belly} alt="Sale Heels" className='w-full' />
          <p className='underline text-center mt-5'>Sale Heels</p>
        </Link>

        {/* Sale Boots */}
        <Link className='flex flex-col items-center'>
          <img src={jute} alt="Sale Boots" className='w-full' />
          <p className='underline text-center mt-5'>Sale Boots</p>
        </Link>

        {/* $50 & Under Sale */}
        <Link className='flex flex-col items-center'>
          <img src={man} alt="$50 & Under Sale" className='w-full' />
          <p className='underline text-center mt-5'>$50 & Under <br /> Sale</p>
        </Link>

        {/* Shop the Sale */}
        <Link className='flex flex-col items-center'>
          <img src={finalSale} alt="Shop the Sale" className='w-full' />
          <p className='underline text-center mt-5'>Shop the Sale</p>
        </Link>

      </div>


    {/* 2nd section */}

    <h1 className='text-2xl lg:ml-36 mt-8 ml-5 '><b>More Sale to Love</b></h1>
    <div className='grid grid-cols-1  md:grid-cols-3 lg:mx-28 gap-5 p-5' >

    <Link>
      <img src={women} alt="" />
      <h1 className='text-center text-xl mt-2'><b>Saving 9 to 5</b></h1>
      <p className='text-center text-xl mt-2'>Go ahead. Live it up with these super steals.</p>
      <p className='underline text-center mt-2'>Shop Women's Sale</p>
    </Link>

    <Link>
      <img src={mens} alt="" />
      <h1 className='text-center text-xl mt-2'><b>Better Thana Day Off</b></h1>
      <p className='text-center text-xl mt-2'>Bargains that make "you" time even better.</p>
      <p className='underline text-center mt-2'>Shop Men's Sale</p>
    </Link>

    <Link>
      <img src={kid} alt="" />
      <h1 className='text-center text-xl mt-2'><b>Sale the Weekend Away</b></h1>
      <p className='text-center text text-xl mt-2'>Snag something for them to enjoy!</p>
      <p className='underline text-center mt-2' >Shops Kits'Sale</p>
    </Link>
    </div>



{/* 3rd secction */}
  {/*  */}
    <div className='hidden lg:block mt-28 '>
      <div className='flex'>


    <div className='mt-18 p-32 ml-40'>
      <Link>
      <h1 className='text-center text-xl mt-2'><b>Steve Madden: New & Now</b></h1>
      <p className='text-center text text-xl mt-2 '>A touch of modern and chic is what every outfit needs.</p>
      <p className='underline text-center mt-2'>Shop Steve Madden</p>
      </Link>
    </div>
    <div className='mr-28'>
      <img src={boot} alt="" className='w-full' />
    </div>
      </div>
    </div>

    <div className='  sm:block  lg:hidden '>

    <div className=''>
      <img src={boot} alt="" />
    </div>
    <div className='mt-5'>
      <Link>
      <h1 className='text-center text-xl mt-5'><b>Steve Madden: New & Now</b></h1>
      <p className='text-center text text-xl mt-5'>A touch of modern and chic is what every outfit needs.</p>
      <p className='underline text-center mt-5'>Shop Steve Madden</p>
      </Link>
    </div>
    </div>

    
    

{/* 4th section */}

<div className="justify-center items-start grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-24 p-12 mt-8">
  <div>
    <Link to="/new-arrivals" className="text-blue-500 text-lg">
      <img src={New} alt="" />
    </Link>
    <h1 className='text-2xl'><b>Shop Marc Jacobs</b></h1>
  </div>

  {/* Card 1 */}
  <div>
    <Link to="" className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={bag} alt="Tote Bag" className="w-96 h-[57.2vh] object-cover"/>
    </Link>
    <Link className='text-xl'>
      <p className="font-bold mt-2 hover:underline">Marc Jacobs</p>
      <p className="text-gray-600 hover:underline">The Denim Chain Medium Tote Bag</p>
      <p className="text-black font-bold">$295.00</p>
    </Link>
  </div>

  {/* Card 2 */}
  <div>
    <Link to="" className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={mini_bag} alt="Mini Bag" className="w-96 h-[57.2vh] object-cover"/>
    </Link>
    <Link className='text-xl'>
      <p className="font-bold mt-2 hover:underline">Marc Jacobs</p>
      <p className="text-gray-600 hover:underline">The Denim Chain Mini Bag</p>
      <p className="text-blue-700 font-bold">$136.50</p>
    </Link>
  </div>

  {/* Card 3 */}
  <div>
    <Link to="" className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={black_bag} alt="Sack Bag" className="w-96 h-[57.2vh] object-cover"/>
    </Link>
    <Link className='text-xl'>
      <p className="font-bold mt-2 hover:underline">Marc Jacobs</p>
      <p className="text-gray-600 hover:underline">The Leather Mini Sack Bag</p>
      <p className="text-black font-bold">$325.00</p>
    </Link>
  </div>
</div>

    
    {/* 5th section */}
    <h1 className='text-2xl lg:ml-36 mt-8 ml-5 font-bold'>Want inspiration? Visit The Style Room for styling tips and fashion trends.</h1>

    <div className='grid grid-cols-1  md:grid-cols-3 lg:mx-32 gap-4 p-4'>

    <Link className='text-center'>
    <img src={s1} alt="" />
    <p className='font-bold text-xl mt-4'>How To:Demin</p>
    <p className='text-xl mt-2'>Unlock denim's full potential with expert styling tips to elevate this timeless staple.</p>
    <p className='underline mt-2'>Shop How To: Denim</p>
    </Link>

    <Link className='text-center'>
    <img src={s2} alt="" />
    <p className='font-bold text-xl mt-4'>Newest in Men's Fashion</p>
    <p className='text-xl mt-2'>Find movement footwear, clothing, and accessories you'll love.</p>
    <p className='underline mt-2'>Shop Men's New Arrivals</p>
    </Link>

    <Link className='text-center'>
    <img src={s3} alt="" />
    <p className='font-bold text-xl mt-4'>Sartorial Sporty</p>
    <p className='text-xl mt-2'>This rising fashion trend creates a contemporary and effortless look by seamlessly merging the worlds of tailored pieces and athletic-inspired styles</p>
    <p className='underline mt-2'>Shop Sartorial Sporty</p>
    </Link>
    </div>


    {/* section 6 */}
    <h1 className='font-bold text-2xl lg:ml-36 ml-5 mt-16'>Zappos 25th Birthday Exclusives</h1>
<div className='justify-center items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:mx-24 p-5'>
  
  <div>
    <Link className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={s4} alt="" className="w-full h-[30vh] object-cover" />
    </Link>
    <Link className='text-sm'>
      <p className='font-bold hover:underline mt-2'>KEEN Kids</p>
      <p className='text-gray-900 hover:underline'>Targhee Boundless Alternative</p>
      <p className='text-gray-600'>Closure Durable (Toddler/Little Kid)</p>
      <p className='font-bold text-blue-600'>$68.45</p>
    </Link>
  </div>
  
  <div>
    <Link className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={s5} alt="" className="w-full h-[30vh] object-cover" />
    </Link>
    <Link className='text-sm'>
      <p className='font-bold hover:underline mt-2'>Vans</p>
      <p className='text-gray-900 hover:underline'>Mte Ultrarange Exo </p>
      <p className='text-gray-600'>Unisex</p>
      <p className='font-bold text-blue-600'>$99.95</p>
    </Link>
  </div>

  <div>
    <Link className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={s6} alt="" className="w-full h-[30vh] object-cover" />
    </Link>
    <Link className='text-sm'>
      <p className='font-bold hover:underline mt-2'>Steve Madden</p>
      <p className='text-gray-900 hover:underline'>Mayven</p>
      <p className='text-gray-600'>Women's</p>
      <p className='font-bold text-blue-600'>$80.95</p>
    </Link>
  </div>

  <div>
    <Link className="flex flex-col items-center p-4" style={{ backgroundColor: '#f3f3f3' }}>
      <img src={s7} alt="" className="w-full h-[30vh] object-cover"/>
    </Link>
    <Link className='text-sm'>
      <p className='font-bold hover:underline mt-2'>Crocs</p>
      <p className='text-gray-900 hover:underline'>Savannah Bananas Classic Clogs</p>
      <p className='text-gray-600'>Unisex</p>
      <p className='font-bold text-blue-600'>$48.96</p>
    </Link>
  </div>
  
</div>


{/*  */}
    <div className='grid grid-cols-1  md:grid-cols-4 lg:mx-32 gap-10 mt-8 '>
      
      <div>
      <Link>
      <img src={s8} alt="" className="p-6" />
      </Link>
      <Link>
      <p className='text-xl mt-2'>Come celebrate all year long with Sales, exclusives ,and extra-special surprises. </p>
      <p className='underline text-sm'>Join the Party</p>
      </Link>
      </div>

      <div> 
      <Link>
      <img src={s9} alt="" className="p-6"/>
      </Link>
      <Link className=''>
      <p className='text-xl mt-2'>Learn how to easily donate or recycle your secondhand items</p>
      <p className='underline text-sm'>Explore Zappose for Good</p>
      </Link>
    </div>

      <div>
      <Link>
      <img src={s10} alt="" className="p-6" />
      </Link>
      <Link>
      <p className='text-xl mt-1'>At Zappos, diversity, equity, inclusion, and individuality are central to our core values.</p>
      <p className='underline text-sm'>Learn More About </p>
      <p className='underline text-sm'>Zappos ONE Purpose</p>
      </Link>
      </div>

      <div>
      <Link>
      <img src={s11} alt="" className="p-6" />
      </Link>
      <Link>
      <p className='text-xl '>We're highlighting brands who are making a difference and helping build a better place for us all.</p>
      <p className='underline text-sm'>Shop Goods for Good</p>
      </Link>
      </div>

    </div>

  </>
  )
}

export default Home
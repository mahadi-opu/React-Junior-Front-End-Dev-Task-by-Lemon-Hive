import Link from 'next/link';
import React from 'react'

const menus = [
  { id: 1 , title: "Home", url: "/" },
  { id: 2 , title: "About us", url: "/about"},
  { id: 3 , title: "What We do", url: "/whatwedo"},
  { id: 4 , title: "Our Work", url: "/ourwork"},
  { id: 5 , title: "Blog", url: "/blog"},
  { id: 6 , title: "Say hi", url: "/sayhi"},
  { id: 7 , title: "Con Details", url: "/condetails"}
];



const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
          <ul className='hidden md:flex items-center gap-8 font-[500] text-[18px] leading-[21px] text-black'>
            {menus.map((link)  => (
                <Link key={link.id} href={link.url}>
                    { link.title} 
                </Link>
              ))}
          </ul>
    </div>
  )
}

export default Navbar
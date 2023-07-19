import React, {useState, useEffect} from 'react';
import Wrapper from "../wrapper/Wrapper";
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image';

import logo from '../../public/logo/React.png';


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [lastScrolly, setLastScrolly] = useState(0);

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-transparent flex items-center 
      justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className=" h-[60px]  flex justify-between items-center z-50 relative">
          <Link href='/'>
              <Image src={logo} width={116} height={200} alt="logo"/>
          </Link>
          <Navbar/>
          <div>
            <Link href='/' className='text-black font-[500] text-[27px]'> <i className="ri-menu-line"></i> </Link>
          </div>
      </Wrapper>
    </header>
  )
}

export default Header;

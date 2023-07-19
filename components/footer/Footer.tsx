import Link from "next/link";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import footerlogo from '../../public/logo/footer-logo-React.png';
import Image from "next/image";



const Footer = () => {
    return (
        <footer className="bg-[#111D5E] h-[336px] text-white pt-16 pb-16">
            <Wrapper className="flex justify-center">
               <div>
                    <Link href='/'>
                        <Image src={footerlogo} className='w-[175px] md:w-[150px]' alt=" footer logo"/> 
                    </Link>
                    <div className=" flex gap-5 pt-[60px] justify-center">
                        <Link href='/' className="text-[32px]">
                            <i className="ri-twitter-fill"></i>
                        </Link>
                        <Link href='/' className="text-[32px]">
                            <i className="ri-linkedin-box-fill"></i>
                        </Link>
                        <Link href='/' className="text-[32px]">
                            <i className="ri-facebook-circle-fill"></i>
                        </Link>
                        <Link href='/' className="text-[32px]">
                            <i className="ri-dribbble-fill"></i>
                        </Link>
                    </div> 
               </div> 
            </Wrapper>
            <Wrapper className="flex justify-center mt-4 px-0">
                {/* Copy Right START */}
                <p className="text-[16px] text-white cursor-pointer text-center md:text-center">
                    © 2023 Lemonhive. All rights reserved.
                </p>
                {/* Copy Right END */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
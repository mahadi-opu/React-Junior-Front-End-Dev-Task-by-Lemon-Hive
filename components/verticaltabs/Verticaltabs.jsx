import { useState } from 'react';
import Wrapper from '../wrapper/Wrapper';
import { LuArrowDownUp } from 'react-icons/lu';
import Image from 'next/image';
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { FaDribbble } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";

import images1 from '../../public/conference/Rectangle-1.png';
import images2 from '../../public/conference/Rectangle.png';
import images3 from '../../public/conference/Rectangle-2.png';




const Verticaltabs = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabname) => {
        setActiveTab(tabname);
    };


    return (
        <section className='h-auto py-16 md:py-16 bg-white'>

            <Wrapper className="">
                <h2 className='text-[#0A142F] text-[48px] font-[700] pb-2'> Conference info </h2>
                <h3 className='text-[#0A142F] lg:text-[20px] text-[12px] font-[400] mb-4'> Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum. </h3>
                <div className='flex flex-wrap '>
                    <div className='w-full md:w-1/3 lg:w-1/4 xl:w-2/6'>
                        <div className="vertical-tabs">
                            <div className={`tab w-[300px] lg:w-[360px] h-[65px] lg:h-[65px] ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
                                <LuArrowDownUp className='tab-icon' />  Organizer
                            </div>
                            <div className={`tab w-[300px] lg:w-[360px] h-[65px] ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
                                <LuArrowDownUp className='tab-icon' />  Speakers
                            </div>
                            <div className={`tab w-[300px] lg:w-[360px] h-[65px] ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => handleTabClick('tab3')}>
                                <LuArrowDownUp className='tab-icon' />  Schedule
                            </div>
                            <div className={`tab w-[300px] lg:w-[360px] h-[65px] ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => handleTabClick('tab4')}>
                                <LuArrowDownUp className='tab-icon' />  Sponsors
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-2/3 lg:w-3/4 xl:w-4/6'>

                        {/* Add the content for each tab here */}
                        <div id="tab1" className={`tab-content p-10 rounded  bg-[#F9FAFB] border text-black ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                            {/* Add the content for each tab here */}
                            <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images1} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images1} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images1} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                           
                        </div>

                        <div id="tab2" className={`tab-content bg-black text-white py-5 ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                            {/* Add the content for each tab here */}
                            <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images2} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <div className='flex justify-between items-center lg:flex-row flex-col '>
                                        <h4 className='font-[700] mb-3 lg:text-[20px] text-[15px] text-[#0A142F] '>Ronald Richards</h4>
                                        <div className='flex gap-3 mb-3'>
                                            <AiFillLinkedin className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoTwitter className='text-[#CDCDCD] text-[20px]' />
                                            <FaDribbble className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoGithub className='text-[#CDCDCD] text-[20px]' />

                                        </div>
                                    </div>
                                    <p className='font-[400] lg:text-[16px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images2} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <div className='flex justify-between items-center lg:flex-row flex-col '>
                                        <h4 className='font-[700] mb-3 lg:text-[20px] text-[15px] text-[#0A142F] '>Ronald Richards</h4>
                                        <div className='flex gap-3 mb-3'>
                                            <AiFillLinkedin className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoTwitter className='text-[#CDCDCD] text-[20px]' />
                                            <FaDribbble className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoGithub className='text-[#CDCDCD] text-[20px]' />

                                        </div>
                                    </div>
                                    <p className='font-[400] lg:text-[16px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images2} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <div className='flex justify-between items-center lg:flex-row flex-col '>
                                        <h4 className='font-[700] mb-3 lg:text-[20px] text-[15px] text-[#0A142F] '>Ronald Richards</h4>
                                        <div className='flex gap-3 mb-3'>
                                            <AiFillLinkedin className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoTwitter className='text-[#CDCDCD] text-[20px]' />
                                            <FaDribbble className='text-[#CDCDCD] text-[20px]' />
                                            <BiLogoGithub className='text-[#CDCDCD] text-[20px]' />

                                        </div>
                                    </div>
                                    <p className='font-[400] lg:text-[16px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                            
                        </div>

                        <div id="tab3" className={`rounded p-10 tab-content bg-black text-white py-5 ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                            <div class=" bg-white m-5 rounded">
                                <div className='flex flex-row justify-between p-5'>
                                    <div className="bg-white md:w-2/4 rounded">
                                        <h3 className='text-[#0A142F] lg:text-[20px] text-[16px] font-[700] mb-4'> February 11, 2014</h3>
                                    </div>
                                    <div class="bg-white md:w-2/4 text-right">
                                        <h5 className='text-[#0A142F] lg:text-[16px] text-[12px] font-[400] mb-4'> Wednesday</h5>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between p-5'>
                                    <ul className='text-[#000] text-[16px] font-[400]'>
                                            <li className='mb-5'>
                                                Duration : 05:00-06:00
                                                <li className='ms-3'> Registration </li>
                                            </li>
                                            <li className='mb-5'>
                                                Duration : 06:00-13:30
                                                <li className='ms-3'> Design systems for beginners </li>
                                            </li>
                                            <li className='mb-5'>
                                                Duration : 09:00-10:00
                                                <li className='ms-3'> Break </li>
                                            </li>
                                        </ul>
                                   
                                </div>
                            </div>
                            <div class=" bg-white m-5 rounded">
                                <div className='flex flex-row justify-between p-5'>
                                    <div className="bg-white md:w-2/4 rounded">
                                        <h3 className='text-[#0A142F] lg:text-[20px] text-[16px] font-[700] mb-4'> February 11, 2014</h3>
                                    </div>
                                    <div class="bg-white md:w-2/4 text-right">
                                        <h5 className='text-[#0A142F] lg:text-[16px] text-[12px] font-[400] mb-4'> Wednesday</h5>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between p-5'>
                                    <ul className='text-[#000] text-[16px] font-[400]'>
                                        <li className='mb-5'>
                                            Duration : 05:00-06:00
                                            <li className='ms-3'> Registration </li>
                                        </li>
                                        <li className='mb-5'>
                                            Duration : 06:00-13:30
                                            <li className='ms-3'> Design systems for beginners </li>
                                        </li>
                                        <li className='mb-5'>
                                            Duration : 09:00-10:00
                                            <li className='ms-3'> Break </li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>

                        <div id="tab4" className={`tab-content p-10 rounded  bg-[#F9FAFB] border text-black ${activeTab === 'tab4' ? 'block' : 'hidden'}`}>
                            {/* Add the content for each tab here */}
                            <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images3} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images3} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                             {/* Add the content for each tab here */}
                             <div class="flex md:flex-row justify-between items-center bg-white m-5 p-3 lg:p-5 gap-5">
                                <div className="bg-white md:w-1/5 rounded">
                                    <Image src={images3} className='rounded h-[80px] lg:h-[120px] w-[150px] lg:w-[150px]' alt="Picture of the author" />
                                </div>
                                <div class="bg-white md:w-4/5">
                                    <h4 className='font-[700] mb-3 lg:text-[20px] text-[16px] text-[#0A142F] '> Siddhartha </h4>
                                    <p className='font-[400] lg:text-[20px] text-[12px] text-[#0A142F] '> Lorem ipsum dolor sit amet, con sec tetur ad. </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </Wrapper>

        </section>
    )
}

export default Verticaltabs;
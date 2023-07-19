import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import { LiaMedalSolid } from 'react-icons/lia';
import Image from 'next/image';

import Vector10 from '../../public/our_sponsor/Vector (10).png';
import Vector11 from '../../public/our_sponsor/Vector (11).png';
import Vector1 from '../../public/our_sponsor/Vector-1.png';
import Vector4 from '../../public/our_sponsor/Vector-4.png';
import Vector5 from '../../public/our_sponsor/Vector-5.png';
import Vector6 from '../../public/our_sponsor/Vector-6.png';
import Vector7 from '../../public/our_sponsor/Vector-7.png';
import Vector from '../../public/our_sponsor/Vector.png';
import gofore from '../../public/our_sponsor/image 1.png';


const OurSponsor = () => {
  return (
    <section className='h-auto py-[100px] bg-[#F9FAFB] text-center '>
        <Wrapper className="">
            <h2 className='py-[50px] text-[48px] font-[700] leading-[58px] text-black'> Our Sponsor  </h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-[100%] lg:w-[80%] m-auto'>
               
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <LiaMedalSolid className='text-[#FFC93E] text-[16px] font-[500] '/>
                        <h5 className='text-[12px] text-[#667085] lg:text-[16px] font-[500] leading-[58px]' > Gold Sponsor </h5>
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        <div className=" w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector10} layout="responsive" width={200} height={65} alt=""/>
                        </div>
                        <div className=" w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector11} layout="responsive" width={200} height={65} alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <LiaMedalSolid className='text-[#FFC93E] text-[16px] font-[500] '/>
                        <h5 className='text-[12px] text-[#667085] lg:text-[16px] font-[500] leading-[58px]' > Silver Sponsors </h5>
                    </div>
                    
                    <div className='flex flex-wrap justify-center'>
                        
                        <div className=" w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector1}  layout="responsive" width={200} height={65} alt=""/>
                        </div>

                        <div className="w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector4}  layout="responsive" width={200} height={65} alt=""/>
                        </div>

                        <div className="w-1/2 lg:w-1/4 p-2">
                            <Image src={gofore}  layout="responsive" width={200} height={65} alt=""/>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <LiaMedalSolid className='text-[#FFC93E] text-[16px] font-[500] '/>
                        <h5 className='text-[12px] text-[#667085] lg:text-[16px] font-[500] leading-[58px]' > Bronze Sponsors </h5>
                    </div>
                    <div className='flex flex-wrap justify-between items-center'>
                        
                        <div className=" w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector5}  layout="responsive" width={200} height={65} alt=""/>
                        </div>
                        <div className="w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector6}  layout="responsive" width={200} height={65} alt=""/>
                        </div>
                        <div className="w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector7}  layout="responsive" width={200} height={65} alt=""/>
                        </div>
                        <div className="w-1/2 lg:w-1/4 p-2">
                            <Image src={Vector}  layout="responsive" width={200} height={65} alt=""/>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default OurSponsor
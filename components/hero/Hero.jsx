import React from 'react'
import Wrapper from '../wrapper/Wrapper';
import Image from 'next/image';
import styles from './hero.module.css';
import heroImg from '../../public/hero/hero_image.png';
import sideImg from '../../public/hero/side_image.png';
import updesign from '../../public/hero/updesign.png';
import vectorbg from '../../public/hero/vector-1.png';
import { GoArrowUpRight } from 'react-icons/go';



const Hero = () => {

  return (
    <section className={`h-auto py-[130px] lg:py-[150px] ${styles.hero_section}`}>
      <Wrapper className="relative">
        <Image src={vectorbg} className={`${styles.vector_background} absolute z-[25] top-[0px] lg:top-[-12px] right-[0px] lg:right-[73px] w-[500px] lg:w-[940px] lg:h-[auto] `} alt="Picture of the author" />
        <div className={`relative z-30`}>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='justify-center flex items-center'>
              <Image src={updesign} className={`absolute top-[-60px] lg:top-[-60px] left-[85px] lg:left-[300px]`}
                width={100} height={100} alt="Picture of the author" />
              <div className='text-right'>
                <h1 className='leading-[60px] lg:leading-[130px] font-[700] lg:text-[140px] text-[60px] text-[#111D5E]'> React Conference </h1>
              </div>
            </div>

          </div>
        </div>

        <div className={`${styles.herobottom_content} mt-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className='order-[3] lg:order-[1]'>
              <Image src={sideImg} className={`${styles.left_image}`} alt="Picture of the author" />
            </div>
            <div className='order-[1] lg:order-[2]'>
              <div className='flex flex-col items-center lg:items-start gap-4'> 
                  <h4 className='lg:mb-[60px] font-[400] lg:text-[18px] text-[16px] text-[#000000] text-justify'> Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</h4>
                  <button className=" mt-10 rounded-full ... text-black bg-[#FFC93E] py-2 px-3 font-[500] text-[18px] flex items-center w-[177px] lg:w-[293px] h-[54px] justify-center gap-3 hover:bg-[#111D5E] hover:text-white ease-in duration-300">Buy Tickets <GoArrowUpRight /> </button>
              </div>
            </div>
            <div className='order-[2] lg:order-[3]'>
              <Image src={heroImg} className={`${styles.right_image} mt-[0px] lg:mt-[-100]`} alt="Picture of the author" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero;
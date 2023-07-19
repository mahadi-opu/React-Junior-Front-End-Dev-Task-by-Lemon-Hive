import { useState } from 'react';
import Wrapper from '../wrapper/Wrapper';
// import { useRouter } from 'next/navigation';

import 'react-vertical-timeline-component/style.min.css';
import { BsRecordCircleFill } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


import jsonData from '../../app/api/data.json';
import Link from 'next/link';





const Conferences = () => {
 


    return (
        <section className='h-auto py-[50px] flex justify-center items-center bg-white text-black'>
            <Wrapper className='text-center'>
                <h2 className='py-[50px] text-[48px] font-[700] leading-[58px]'> Conferences </h2>
                <div className='experience'>
                  
                    <VerticalTimeline lineColor="#CDCDCD">
                        <Link href="/condetails">
                            <VerticalTimelineElement
                                // onClick={handleTabClick}
                                className="vertical-timeline-element--education"
                                contentStyle={{
                                    background: '#F9FAFB',
                                    color: '#000',
                                    cursor: 'pointer',
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid #FFC93E'
                                }}
                                date="02 September, 2023"
                                iconStyle={{
                                    background: "rgb(255 201 62 / 36%)",
                                    color: '#FFC93E',
                                    border: '2px solid #FFC93E',
                                }}
                                icon={<AiTwotoneThunderbolt />}
                            >

                                <h4 className="vertical-timeline-element-title text-[#111D5E] text-[18px] font-[500] flex items-center gap-4"> <span><BsRecordCircleFill className='text-[#FFC93E]' /></span>  Freezing Edge 2023</h4>
                                <p className='text-[14px] font-[400] text-start text-[#617187]'> The edge isnt bleeding, its freezing! </p>
                            </VerticalTimelineElement>
                        </Link>
                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="02 September, 2023"
                            contentStyle={{
                                background: '#F9FAFB',
                                color: '#000',
                                cursor: 'pointer',
                            }}
                            iconStyle={{
                                background: "#F9FAFB",
                                color: '#CDCDCD',
                                border: '2px solid #CDCDCD',
                            }}
                            icon={<AiTwotoneThunderbolt />}
                        >
                            
                            <h4 className="vertical-timeline-element-title text-[#111D5E] text-[18px] font-[500] flex items-center gap-4"> <span><BsRecordCircleFill className='text-[#FFC93E]' /></span> Freezing Edge 2023</h4>
                            <p className='text-[14px] font-[400] text-start text-[#617187]'> The edge isnt bleeding its freezing! </p>
                        </VerticalTimelineElement>
                        
                        <VerticalTimelineElement
                            contentStyle={{
                                background: '#F9FAFB',
                                color: '#000',
                                cursor: 'pointer'
                            }}
                            className="vertical-timeline-element--work"
                            date="02 September, 2023"
                            iconStyle={{
                                background: "#F9FAFB",
                                color: '#CDCDCD',
                                border: '2px solid #CDCDCD',
                            }}
                            icon={<AiTwotoneThunderbolt />}
                        >
                            <h4 className="vertical-timeline-element-title text-[#111D5E] text-[18px] font-[500] flex items-center gap-4"> <span><BsRecordCircleFill className='text-[#FFC93E]' /></span> Freezing Edge 2023</h4>
                            <p className='text-[14px] font-[400] text-start text-[#617187]'> The edge isnt bleeding its freezing! </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            contentStyle={{
                                background: '#F9FAFB',
                                color: '#000',
                                cursor: 'pointer'
                            }}
                            className="vertical-timeline-element--work"
                            date="02 September, 2023"
                            iconStyle={{
                                background: "#F9FAFB",
                                color: '#CDCDCD',
                                border: '2px solid #CDCDCD',
                            }}
                            icon={<AiTwotoneThunderbolt />}
                        >
                            <h4 className="vertical-timeline-element-title text-[#111D5E] text-[18px] font-[500] flex items-center gap-4"> <span><BsRecordCircleFill className='text-[#FFC93E]' /></span> Freezing Edge 2023</h4>
                            <p className='text-[14px] font-[400] text-start text-[#617187]'> The edge isnt bleeding its freezing! </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
            </Wrapper>
        </section>
    )
}

export default Conferences;
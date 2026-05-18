"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

import img1 from '../../../../public/assets/banner1.png'
import img2 from '../../../../public/assets/banner2.png'
import img3 from '../../../../public/assets/banner3.png'


export default function Hero() {
    return (
        <section>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full"
            >
                <SwiperSlide>
                    <div className="rounded-b-2xl flex items-center flex-col-reverse lg:flex-row-reverse justify-between gap-10 px-10 py-20 bg-[var(--main-color)]">
                        <div className=' text-center lg:text-left space-y-4 flex-1'>
                            <h1 className='font-bold md:text-7xl text-5xl'>Learn Smarter<span className='font-black text-[var(--primary-color)]'> with Expert </span>Tutors !</h1>
                            <p className='text-[18px] font-semibold hover:text-[var(--text-color)]'>Join thousands of students learning with expert tutors through personalized online and offline classes.</p>
                            <Link href="/">
                                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--primary-color)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    Explore Tutors </button>
                                {/* <Button className="font-bold">
                                   
                                </Button> */}
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Image src={img3} alt='Not ROund' className="h-200"></Image>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="rounded-b-2xl flex items-center flex-col-reverse lg:flex-row justify-between gap-10 px-10 py-20 bg-[var(--main-color)]">
                        <div className=' text-center lg:text-left space-y-4 flex-1'>
                            <h1 className='font-bold md:text-7xl text-5xl'>Find the<span className='font-black text-[var(--primary-color)]'> Perfect Tutor </span>for Your Success !</h1>
                            <p className='text-[18px] font-semibold hover:text-[var(--text-color)]'>Discover qualified tutors for every subject and level. Book lessons easily and start improving today.</p>
                            <Link href="/">
                                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--primary-color)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    Meet Our Tutors </button>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Image src={img2} alt='Not ROund' className="h-200"></Image>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="rounded-b-2xl flex items-center flex-col-reverse lg:flex-row justify-between gap-10 px-10 py-20 bg-[var(--main-color)]">
                        <div className=' text-center lg:text-left space-y-4 flex-1'>
                            <h1 className='font-bold md:text-7xl text-5xl'>Your Learning Journey<span className='font-black text-[var(--primary-color)]'> Starts Here</span>!</h1>
                            <p className='text-[18px] font-semibold hover:text-[var(--text-color)]'>Find experienced tutors, schedule classes instantly, and learn at your own pace from anywhere.</p>
                            <Link href="/">
                                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--primary-color)] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    Start Learning </button>
                            </Link>
                        </div>
                        <div className="flex-1">
                            <Image src={img1} alt='Not ROund' className="h-200"></Image>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}
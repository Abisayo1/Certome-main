import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BiLeftArrowAlt, BiRightArrowAlt, BiSolidStar, BiStar } from 'react-icons/bi'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Testimonials = () => {
    const Data = [
        { name: "Abisayo FA", role: "Lead Developer", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Software Developer", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Project Manager", pic: 'imgIcon.jpg' },
        { name: "Abisayo FA", role: "Senior Developer", pic: 'imgIcon.jpg' },
    ]

    // Refs for navigation buttons
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const [active, setActive] = useState()

    return (
        <div className="px-5">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                speed={800}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current
                    swiper.params.navigation.nextEl = navigationNextRef.current
                }}
                onSlideChange={(cur) => setActive(cur.realIndex)}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {Data.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`shadow-xl transition-transform duration-500 ${
                                active === index ? 'scale-105' : 'scale-90'
                            } my-10 rounded-xl bg-[#fafafa] py-10 px-5 max-w-[350px] md:max-w-[400px] mx-auto`}
                        >
                            <div className="flex items-center my-5">
                                <div className="w-16 mx-2">
                                    <img className="rounded-full" src={data.pic} alt="" />
                                </div>
                                <div>
                                    <p className="font-MontserratBold text-xl">{data.name}</p>
                                    <div className="flex text-xl items-center">
                                        <p className="text-lg">{data.role}</p>
                                        <div className="flex text-web-orange-600 mx-4">
                                            <BiSolidStar />
                                            <BiSolidStar />
                                            <BiSolidStar />
                                            <BiSolidStar />
                                            <BiStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="font-MontserratBold text-2xl my-2">
                                    It was a very good experience
                                </p>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Molestias itaque, saepe reprehenderit dignissimos voluptate
                                    omnis laboriosam consectetur.
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="arrows flex text-2xl justify-between mx-auto my-5 max-w-[300px]">
                <div
                    ref={navigationPrevRef}
                    className="prev-btn p-2 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400"
                >
                    <BiLeftArrowAlt />
                </div>
                <div
                    ref={navigationNextRef}
                    className="next-btn p-2 rounded-full bg-gray-300 cursor-pointer hover:bg-gray-400"
                >
                    <BiRightArrowAlt />
                </div>
            </div>
        </div>
    )
}

export default Testimonials

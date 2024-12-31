import React from 'react'

import AnimatedTitle from './AnimatedTitle'

import { BentoTilt } from './BentoTilt'

import { BentoCard } from './Features'


const Glance = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container px-3 mx-auto md:px-10">
                <div className="px-5 py-32">
                    <p className="font-general text-sm uppercase md:text-[10px] text-blue-50 text-center">
                        our universe in a nutshell
                    </p>
                    <AnimatedTitle
                        title="ze<b>n</b>ry at a glan<b>c</b>e"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                </div>
                <div className="grid w-full grid-cols-2 grid-rows-3 gap-7 h-[135vh]">
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src={'videos/card-1.webm'}
                            description={'Products'}
                            title={
                                <>4<b>+</b></>
                            }
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/zentry-2.mp4"
                            title={
                                <>
                                    100<b>m+</b>
                                </>
                            }
                            description="Treasury"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/zentry-3.mp4"
                            title={
                                <>
                                    2<b>0</b>+
                                </>
                            }
                            description="Partners"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/zentry.mp4"
                            title={
                                <>
                                    500<b>k</b>+
                                </>
                            }
                            description="Residents"
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/zentry-4.mp4"
                            title={
                                <>
                                    10<b>m</b>
                                </>
                            }
                            description="Revenue Generated 2024"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Glance
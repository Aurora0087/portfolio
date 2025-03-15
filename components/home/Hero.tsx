'use client'

import { motion } from 'framer-motion';
import React from 'react'

function Hero() {
    return (
        <div className=' h-screen flex items-end'>
            <div className=' text-[15vw] w-full'>
                <div className='flex flex-col md:flex-row gap-4 items-center w-full'>
                    <div className='order-2 md:order-1 text-left w-full  h-[20vw]'>
                        <motion.p
                            initial={{
                                y: -50,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                            }}
                        >
                            Xyz
                        </motion.p>
                    </div>
                    <motion.h2
                        initial={{
                            y: 5,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                        className=' order-1 md:order-2 text-base text-center w-full'>
                        Full Stack Dev & digital explorer
                    </motion.h2>
                </div>
                <div className='h-[20vw] w-full text-right overflow-hidden'>
                    <motion.p
                        initial={{
                            y: 50,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                    >
                        Ghkbsicmn.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default Hero;
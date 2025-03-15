"use client"

import { motion } from 'framer-motion'
import React from 'react'
import PerspectiveText from '../PerspectiveLink'


function Contact() {
    return (
        <div className='min-h-[50vh] py-16 mt-40 flex gap-8 md:gap-16'>
            <div className='p-1'>
                03
            </div>
            <div className=' flex flex-col gap-8 grow'>
                <div className='flex justify-between items-center gap-4 flex-col sm:flex-row'>
                    <motion.p
                        className='p-1'
                        initial={{
                            x: 100,
                        }}
                        whileInView={{
                            x: 0,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                    >
                        Contact
                    </motion.p>
                    <div></div>
                </div>
                <div className='overflow-hidden bg-[#c9fd74] p-2 rounded-2xl text-black'>
                    <p className=' text-5xl'>Get in Touch</p>
                    <div className=' w-fit'>
                        <PerspectiveText label='debrajbanshi1@gmail.com' url='mailto:debrajbanshi1@gmail.com' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
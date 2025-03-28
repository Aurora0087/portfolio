"use client"

import { motion } from 'framer-motion'
import React from 'react'
import PerspectiveText from '../PerspectiveLink'


function Contact() {
    return (
        <div
            className='relative h-[33vh]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='overflow-hidden fixed h-[33vh] w-full bottom-0 bg-[#c9fd74] p-8 text-black flex flex-col justify-center items-center'>
                <p className=' text-5xl'>Get in Touch</p>
                <div className=' w-fit'>
                    <PerspectiveText label='debrajbanshi1@gmail.com' url='mailto:debrajbanshi1@gmail.com' />
                </div>
            </div>
        </div>
    )
}

export default Contact
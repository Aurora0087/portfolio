"use client"

import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <div className='min-h-[50vh] py-16 mt-40 flex gap-8 md:gap-16'>
            <div className='p-1'>
                01
            </div>
            <div className=' flex flex-col gap-8 grow'>
                <div className='flex justify-between items-center gap-4 flex-col sm:flex-row'>
                    <motion.p
                        initial={{
                            x: 100,
                        }}
                        whileInView={{
                            x: 0,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                    >
                        About
                    </motion.p>
                    <motion.div
                        initial={{
                            x: -100,
                        }}
                        whileInView={{
                            x: 0,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                    >
                        <Link href="/about" className='p-1 px-4 rounded-2xl bg-[#c9fd74] text-black hover:text-black/50 flex gap-1 items-center'>
                            More About Me
                            <MoveUpRight className=' w-4 h-4' />
                        </Link>
                    </motion.div>
                </div>
                <div className=' text-3xl overflow-hidden'>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium repellat quaerat magni eligendi fugiat similique dignissimos officia. Excepturi magnam alias repudiandae quibusdam iusto laborum quidem.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default About
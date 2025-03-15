"use client"

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react'

function page() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
            }}
            className=' w-screen h-full grid place-content-center text-center'>
            <h1 className=' mb-4'>Contact</h1>
            <h4 className=' text-6xl sm:text-9xl mb-2 border-y-2'>GET IN</h4>
            <h4 className=' text-6xl sm:text-9xl mb-8 border-b-2'>TOUCH</h4>
            <PerspectiveTextLink label='debrajbanshi1@gmail.com' url='mailto:debrajbanshi1@gmail.com' />
        </motion.div>
    )
}

function PerspectiveTextLink({ label = "none", url = "" }: { label?: string, url?: string }) {
    return (
        <motion.a
            href={url}
            target={"_blank"}
            className="relative uppercase px-6 w-fit text-[6vw] overflow-hidden"
            whileHover="hover"
        >
            <span className="sr-only">{label}</span>
            <span className=" relative h-[8vw] overflow-hidden flex justify-center items-center z-10 max-w-[95vw]" aria-hidden>
                {label.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        data-letter={letter === ' ' ? '\u00A0' : letter}
                        style={{
                            lineHeight: "6vw"
                        }}
                        className="letter relative mt-3 inline-block h-[6vw] indent-0 after:absolute after:left-0 after:top-full after:h-[6vw] after:text-black after:content-[attr(data-letter)]"
                        initial={{ y: "0" }}
                        variants={{
                            hover: { y: "-6vw", color: "transparent", transition: { duration: 0.3, delay: i * 0.03, type: "tween", ease: [0.76, 0, 0.24, 1] } },
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
                <motion.span
                    initial={{
                        x: 0,
                    }}
                    variants={{
                        hover: {
                            x: 10,
                            color: "blue",
                            transition: {
                                duration: 0.2,
                                type: "tween", ease: [0.76, 0, 0.24, 1]
                            },
                        }
                    }}
                    className=' h-[8vw] w-[8vw]'
                >
                    <ArrowUpRight className=' h-full w-full' />
                </motion.span>
            </span>
        </motion.a>
    );
}
export default page
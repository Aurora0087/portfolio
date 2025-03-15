'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
            }}
            className=' w-screen h-screen overflow-hidden p-4 text-center grid place-content-center'>
            <h4 className=' text-[28vw]'>404</h4>
            <p className=' text-sm'>You are Lost...</p>
            <div>
                <Link className=' text-2xl hover:text-blue-500' href="/">Let's go Home</Link>
            </div>
        </motion.div>
    )
}
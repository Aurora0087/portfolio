"use client"

import { useState } from "react";
import Button from "./Button"

import { AnimatePresence, motion } from 'framer-motion';
import Nav from "./Nav";
import Link from "next/link";

const menu = {
    open: {
        width: "350px",
        height: "650px",
        top: "-0.5rem",
        right: "-0.5rem",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },

    closed: {
        width: "0px",
        height: "0px",
        top: "-0.5rem",
        right: "-0.5rem",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }

    }
}

function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className=" fixed w-screen px-4 top-4 flex justify-between z-[9999]">
            <div className=" text-black mix-blend-difference">
                <Link href="/">
                    D---R
                </Link>
            </div>
            <div className=" relative">
                <motion.div
                    className="bg-[#c9fd74] rounded-2xl relative overflow-hidden border-b border-l border-black"
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {
                            isActive && <Nav toggleMenu={() => { setIsActive(!isActive) }} />
                        }
                    </AnimatePresence>

                </motion.div>
                <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
            </div>
        </div>
    )
}

export default Header
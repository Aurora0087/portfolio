"use client"

import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModel from './ProjectModel'


const projects = [
    {
        title: "Qus-Ai",
        type: "Full Stack",
        src: "f1.png",
        color: "#FFE700",
        siteUrl: '',
    },
    {
        title: "C2 Montreal",
        type: "Web Design",
        src: "i1.jpeg",
        color: "#45FFCA",
        siteUrl: '',
    },
    {
        title: "Company Portfolio",
        type: "Web Design",
        src: "ii2.png",
        color: "#FEFFAC",
        siteUrl: 'https://example-comp-portfolio.vercel.app/',
    },
]

function Work() {

    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <div className='min-h-[50vh] py-16 mt-40 flex gap-4 md:gap-16'>
            <div className='p-1'>
                02
            </div>
            <div className=' flex flex-col gap-16 grow'>
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
                        Selected Projects
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
                        <Link href="/projects" className='p-1 px-4 rounded-2xl bg-[#c9fd74] text-black hover:text-black/50 flex gap-1 items-center'>
                            More Projects
                            <MoveUpRight className=' w-4 h-4' />
                        </Link>
                    </motion.div>
                </div>
                <div
                    className='bg-[#c9fd74] p-2 rounded-2xl flex flex-col gap-4'
                >

                    {
                        projects.map((p, i) => {
                            return <ProjectCard key={i} index={i} title={p.title} typeOfWork={p.type} siteUrl={p.siteUrl} setModal={setModal} />
                        })
                    }
                </div>
                <ProjectModel modal={modal} projects={projects} />
            </div>
        </div>
    )
}

export default Work
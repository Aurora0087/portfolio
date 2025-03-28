'use client'

import PerspectiveText from "@/components/PerspectiveLink";
import WorkComponent from "@/components/projects/WorkComponent";
import { motion } from "framer-motion";


const projects = [
    {
        title: "Qus-Ai",
        details: "A website to help you on your study by creating a Mcq paper based on a Topic or a PDF file.",
        src: "f1.png",
        siteUrl: '',
    },
    {
        title: "Editify reCreate",
        details: "",
        src: "i1.jpeg",
        siteUrl: '',
    },
    {
        title: "Company Portfolio",
        details: "A Demo PortFolio website for company.",
        src: "ii2.png",
        siteUrl: 'https://example-comp-portfolio.vercel.app/',
    },
]

function page() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.25, type: "tween", ease: [0.76, 0, 0.24, 1] }
            }}
            className=" w-screen h-fit grid text-center relative pt-8">
            <motion.h4
                initial={{
                    y: 20,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                }}
                className=' text-4xl md:text-[10vw] mt-8'>Selected</motion.h4>
            <motion.h4
                initial={{
                    y: -20,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                }}
                className=' text-4xl md:text-[10vw] mb-8 border-b border-black'>Projects</motion.h4>
            <div className=" flex flex-col gap-4 border-b border-black">
                {projects.map((p, i) => {
                    return <WorkComponent key={i} title={p.title} imgSrc={p.src} siteUrl={p.siteUrl} details={p.details} flowRev={(i + 1) % 2 === 0} />
                })}

            </div>
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
        </motion.div>
    );
}

export default page;
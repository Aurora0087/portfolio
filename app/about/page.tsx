"use client"

import SkillCard from "@/components/about/SkillCard";
import PerspectiveText from "@/components/PerspectiveLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const skills = [
    {
        title: "JavaScript",
        subTitle: "Language"
    },
    {
        title: "Python",
        subTitle: "Language"
    },
    {
        title: "NextJs",
        subTitle: "Frontend"
    },
    {
        title: "React-Native",
        subTitle: "App Dev"
    },
    {
        title: "MongoDB",
        subTitle: "NoSql DB"
    },
    {
        title: "Postgress",
        subTitle: "Sql DB"
    },
    {
        title: "Figma",
        subTitle: "Design"
    },
]

function page() {

    const scrollWidthRef = useRef<HTMLDivElement>(null);

    const topScroll = useScroll({
        target: scrollWidthRef,
        offset: ["start start", "end end"]
    });


    // for top animation
    const scroolWidthR = useTransform(topScroll.scrollYProgress, [0, 1], ["38vw", "100vw"]);
    const scroolHeightR = useTransform(topScroll.scrollYProgress, [0, 1], ["33vh", "50vh"]);
    const scroolWidthL = useTransform(topScroll.scrollYProgress, [0, 1], ["62vw", "0vw"]);

    return (
        <div className=" w-screen h-fit grid text-center relative">
            <div className=" w-screen">
                <motion.div
                    ref={scrollWidthRef} className="flex w-screen flex-col md:flex-row h-[200vh] relative">
                    <motion.div
                        style={{
                            width: scroolWidthL
                        }}
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="md:border-r border-black py-24 flex justify-end text-right">
                        <h4 className=' text-6xl sm:text-9xl lg:text-[20vw] mr-4'>About</h4>
                    </motion.div>
                    <motion.div
                        style={{
                            width: scroolWidthR,
                        }}
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                        }}
                        className=" h-fit sticky top-16">
                        <motion.div
                            style={{
                                height: scroolHeightR
                            }}
                            initial={{
                                y: 100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
                            }}
                            className=" p-4 border-b border-black w-full h-[33vh] text-left text-6xl flex flex-col justify-center">
                            <h1 className="">
                                Xyz
                            </h1>
                            <h1 className="">
                                qwertyuio.
                            </h1>
                        </motion.div>
                        <div className=" p-4 text-left grid grid-cols-[1fr_2fr]">
                            <div></div>
                            <div className="text-pretty w-[250px]">
                                <h3 className=" text-4xl">
                                    Creative
                                </h3>
                                <h3 className=" text-4xl mb-8"> Web designer & Dev</h3>
                                <p className=" text-xl text-black/60">
                                    Hi, I'm Deb Rajbanshi, a 21-year-old Full-Stack Web Developer from Kolkata, India.
                                </p>
                                <p className=" mt-4 text-xl text-black/60">
                                    I'm <span className="text-black bg-[#c9fd74] px-2 rounded">passionate</span> about creating <span className="text-black bg-[#c9fd74] px-2 rounded">innovative</span> and efficient web solutions that transform complex ideas into <span className="text-black bg-[#c9fd74] px-2 rounded">clean</span>, functional, and <span className="text-black bg-[#c9fd74] px-2 rounded">user-friendly</span> digital experiences. With expertise across both frontend and backend technologies, I bring technical skill and <span className="text-black bg-[#c9fd74] px-2 rounded">creative problem-solving</span> to every project I develop.
                                </p>
                                <p className=" mt-4 text-xl text-black/60">
                                    My goal is to craft web applications that are not just technically robust, but also intuitive and engaging for users.
                                </p>
                                <p className="mt-8 text-xl text-black/60">
                                    When I'm not coding, I express my creativity through drawing and 3D modeling in Blender, exploring the intersection of technology and artistic design.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className=" bg-black text-white min-h-[200vh] relative">
                <div className="sticky top-0 p-8 min-h-screen">
                    <h4 className=' text-6xl sm:text-9xl lg:text-[20vw] border-b'>Skills</h4>
                    <div className=" flex flex-col gap-8 md:gap-4 justify-end my-16 text-nowrap text-end capitalize text-3xl sm:text-5xl">
                        {
                            skills.map((s, i) => {
                                return <SkillCard key={i} skill={s.title} subTitle={s.subTitle} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className=" p-8 text-4xl border-b border-black grid place-content-center">
                <Link href="/projects" className=" w-fit flex gap-2 items-center justify-center">
                    Some of My Works
                    <ArrowUpRight className=" w-8 h-8" />
                </Link>
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

        </div>
    )
}

export default page
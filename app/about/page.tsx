"use client"

import PerspectiveText from "@/components/PerspectiveLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function page() {

    const scrollWidthRef = useRef<HTMLDivElement>(null);
    const scrollSkillContainerRef = useRef<HTMLDivElement>(null);

    const topScroll = useScroll({
        target: scrollWidthRef,
        offset: ["start start", "end end"]
    });

    const skillScroll = useScroll({
        target: scrollSkillContainerRef,
        offset: ["start start", "end end"]
    });


    // for top animation
    const scroolWidthR = useTransform(topScroll.scrollYProgress, [0, 1], ["38vw", "100vw"]);
    const scroolHeightR = useTransform(topScroll.scrollYProgress, [0, 1], ["33vh", "50vh"]);
    const scroolWidthL = useTransform(topScroll.scrollYProgress, [0, 1], ["62vw", "0vw"]);

    // for top animation
    const scroolSkill1 = useTransform(skillScroll.scrollYProgress, [0, 0.1], ["0%", "100%"]);
    const scroolSkill2 = useTransform(skillScroll.scrollYProgress, [0.1, 0.2], ["0%", "100%"]);
    const scroolSkill3 = useTransform(skillScroll.scrollYProgress, [0.2, 0.3], ["0%", "100%"]);
    const scroolSkill4 = useTransform(skillScroll.scrollYProgress, [0.3, 0.4], ["0%", "100%"]);
    const scroolSkill5 = useTransform(skillScroll.scrollYProgress, [0.4, 0.5], ["0%", "100%"]);
    const scroolSkill6 = useTransform(skillScroll.scrollYProgress, [0.5, 0.6], ["0%", "100%"]);
    const scroolSkill7 = useTransform(skillScroll.scrollYProgress, [0.6, 0.7], ["0%", "100%"]);

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
                        className=" h-screen sticky top-16">
                        <motion.div
                            style={{
                                height: scroolHeightR
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
                            <div className="text-nowrap">
                                <h3 className=" text-3xl">
                                    Creative
                                </h3>
                                <h3 className=" text-3xl mb-8"> Web designer & Dev</h3>
                                <p className="">
                                    Lorem ipsum, dolor sit amet consectetur
                                </p>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                                <p className="">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                                <p className="">
                                    Lorem ipsum,
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div ref={scrollSkillContainerRef} className=" bg-black text-white min-h-[200vh] relative">
                <h4 className=' text-6xl sm:text-9xl lg:text-[20vw] p-8 border-b-2'>Skills</h4>
                <div className="sticky top-0 p-8">
                    <div className=" flex flex-col gap-8 md:gap-4 justify-end mt-8 text-nowrap text-end capitalize text-2xl sm:text-4xl">
                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill1,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">Javascript</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">Language</div>
                        </motion.div>

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill2,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">Python</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">Language</div>
                        </motion.div>

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill3,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">ReactJs</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">FrontEnd</div>
                        </motion.div>
                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill4,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">React Native</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">App Dev</div>
                        </motion.div>
                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill5,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">MongoDb</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">NoSql DB</div>
                        </motion.div>
                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill6,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">Postgress</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">Sql DB</div>
                        </motion.div>

                        <motion.div
                            initial={{
                                width: 0,
                            }}
                            style={{
                                width: scroolSkill7,
                            }}
                            className=" w-full flex flex-row items-center justify-end gap-4 overflow-hidden">
                            <div className=" w-full">Figma</div>
                            <div className="h-1 rounded-full w-full bg-white"></div>
                            <div className=" text-sm opacity-70">Design</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div
                className='relative h-[33vh]'
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className='overflow-hidden fixed h-[33vh] w-full bottom-0 bg-[#c9fd74] p-8 rounded-2xl text-black flex flex-col justify-center items-center'>
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
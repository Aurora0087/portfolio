'use client'

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function WorkComponent({ title, details, imgSrc, siteUrl, flowRev = false }: { title: string, details: string | ReactNode, imgSrc: string, siteUrl: string, flowRev?: boolean }) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const imgBoxRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current && boxRef.current && imgBoxRef.current) {
            // img box ani

            gsap.fromTo(
                imgBoxRef.current,
                { height: "100%" }, // Start height
                {
                    height: "0%", // End height
                    ease: "none",
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 10%", // When `scrollRef`'s top hits the top of the viewport
                        end: "bottom 10%", // When `scrollRef`'s bottom hits the top
                        scrub: true, // Smoothly animates as you scroll
                    },
                }
            );

            // text box ani
            gsap.fromTo(
                boxRef.current,
                { height: "100%" }, // Start height
                {
                    height: "0%", // End height
                    ease: "none",
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 10%", // When `scrollRef`'s top hits the top of the viewport
                        end: "bottom 10%", // When `scrollRef`'s bottom hits the top
                        scrub: true, // Smoothly animates as you scroll
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={scrollRef} className={` relative flex flex-col md:flex-row justify-between gap-4 items-end border-b p-4 px-8 border-black ${flowRev && 'md:flex-row-reverse'}`}>
            <div
                ref={imgBoxRef}
                className=" relative h-full w-full rounded-2xl overflow-hidden"
            >
                <a target="_blank" href={siteUrl} className=" absolute top-0 left-0 w-full h-full z-10 flex gap-2 justify-center items-center opacity-0 hover:opacity-100 backdrop-blur bg-white/50 transition-all">
                    <h2 className="text-2xl md:text-5xl w-fit text-center">{title}</h2>
                    <ArrowUpRight className=" w-6 h-6 md:w-12 md:h-12" />
                </a>
                <Image src={`/images/${imgSrc}`} alt="Project Image" width={500} height={500} className=" w-full h-full object-cover" />
            </div>
            <div
                ref={boxRef}
                className="h-full w-full rounded-2xl overflow-hidden">
                {details}
            </div>
        </div>
    );
}

export default WorkComponent;
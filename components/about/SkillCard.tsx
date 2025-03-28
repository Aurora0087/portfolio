"use client"

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);

function SkillCard({ skill, subTitle }: { skill: string, subTitle: string }) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const txtRef = useRef<HTMLDivElement>(null);
    const subTxtRef = useRef<HTMLDivElement>(null);
    const bottomLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current && txtRef.current && bottomLineRef.current && subTxtRef.current) {


            gsap.fromTo(
                txtRef.current,
                { y: "100" },
                {
                    y: "0",
                    duration: 1,
                    ease: CustomEase.create("tween", "M0,0 C0.126,0.382 0.227,0.868 0.435,0.932 0.658,1 0.818,1.001 1,1 "),
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 90%",
                        end: "bottom 90%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                subTxtRef.current,
                { y: "100" },
                {
                    y: "0",
                    duration: 1,
                    delay: 0.5,
                    ease: CustomEase.create("tween", "M0,0 C0.126,0.382 0.227,0.868 0.435,0.932 0.658,1 0.818,1.001 1,1 "),
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 90%",
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                bottomLineRef.current,
                { width: "0%" },
                {
                    width: "100%",
                    duration: 0.75,
                    ease: CustomEase.create("tween", "M0,0 C0.126,0.382 0.227,0.868 0.435,0.932 0.658,1 0.818,1.001 1,1 "),
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: "top 90%",
                        end: "bottom 90%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={scrollRef} className=" w-full">
            <div className="overflow-hidden flex justify-end gap-4">
                <div ref={txtRef} className=" w-fit">{skill}</div>
                <div ref={subTxtRef} className=" text-sm opacity-50">{subTitle}</div>
            </div>
            <div ref={bottomLineRef} className="mt-2 h-1 rounded w-full bg-white"></div>
        </div>
    )
}

export default SkillCard;
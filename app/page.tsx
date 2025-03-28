'use client'

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [bgChange, setBgChange] = useState(false);

  const bgChangeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setBgChange(entry.isIntersecting);
      },
      { threshold: 0.0 } // Trigger when 50% of the Work section is visible
    );

    if (bgChangeRef.current) {
      observer.observe(bgChangeRef.current);
    }

    return () => {
      if (bgChangeRef.current) {
        observer.unobserve(bgChangeRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className={`transition-all px-4 ${bgChange ? 'bg-black text-white' : 'bg-white'}`}>
        <Hero />
        <About />
        <div ref={bgChangeRef}>
          <Work />
        </div>
      </div>
      <Contact />
    </div>
  );
}

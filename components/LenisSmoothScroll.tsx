"use client"

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

function LenisSmoothScroll({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathName = usePathname();
    return (
        <ReactLenis root
            key={pathName}
            options={{
                lerp: 0.02,
                duration: 1.5,
                smoothWheel: true,
                touchMultiplier: 2,
                autoResize: true,
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisSmoothScroll
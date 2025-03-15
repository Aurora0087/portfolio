"use client"

import { ReactLenis } from 'lenis/react';

function LenisSmoothScroll({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactLenis root
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
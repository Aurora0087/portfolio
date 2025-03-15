
import { motion } from 'framer-motion';
import Link from 'next/link';

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 50,
        translateX: 20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0.1,
        rotateX: 90,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
};

const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
}

const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Projects",
        href: "/projects"
    },

    {
        title: "Contact",
        href: "/contact"
    }
]

const footerLinks = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/draj_aurora/"
    },
    {
        title: "X.com [Twitter]",
        href: "https://x.com/slayer_sensei"
    },
    {
        title: "Github",
        href: "https://github.com/Aurora0087"
    },
    {
        title: "debrajbanshi@gmail.com",
        href: "mailto:debrajbanshi@gmail.com"
    }
]

function Nav({ toggleMenu }: { toggleMenu: () => void }) {
    return (
        <div className='nav'>
            <div className='nav-body'>
                {
                    links.map((l, i) => {
                        return (
                            <motion.div
                                key={i}
                                className='linkContainer'
                                custom={i}
                                variants={perspective}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                whileHover={{
                                    rotateX: 45,
                                }}
                            >
                                <Link href={l.href} onClick={() => toggleMenu()} className=' text-5xl hover:opacity-50 transition-all'>
                                    {l.title}
                                </Link>
                            </motion.div>
                        )
                    })
                }
            </div>
            <motion.div className='flex flex-wrap gap-8 text-black'>
                {
                    footerLinks.map((l, i) => {
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={slideIn}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <Link target='_blank' href={l.href} onClick={() => toggleMenu()} className=' hover:opacity-50 transition-all'>
                                    {l.title}
                                </Link>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default Nav
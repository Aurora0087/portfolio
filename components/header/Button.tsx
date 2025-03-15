import { motion } from 'framer-motion';

function Button({ isActive, toggleMenu }: { isActive: boolean, toggleMenu: () => void }) {
    return (
        <div className=' absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-2xl overflow-hidden'>
            <motion.div
                className=' relative w-full h-full header-manu-slider'
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div className='el'
                    onClick={() => toggleMenu()}
                >
                    <PerspectiveText label="++Menu" />
                </div>
                <div className='el'
                    onClick={() => toggleMenu()}
                >
                    <PerspectiveText label="--Close" />
                </div>
            </motion.div>
        </div>
    )
}



function PerspectiveText({ label }: { label: string }) {

    return (
        <div className="perspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>

    )

}

export default Button
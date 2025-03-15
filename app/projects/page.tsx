import PerspectiveText from "@/components/PerspectiveLink";
import WorkComponent from "@/components/projects/WorkComponent";


const projects = [
    {
        title: "Qus-Ai",
        details: "",
        src: "f1.png",
        siteUrl: '',
    },
    {
        title: "C2 Montreal",
        details: "",
        src: "i1.jpeg",
        siteUrl: '',
    },
    {
        title: "Company Portfolio",
        details: "",
        src: "ii2.png",
        siteUrl: 'https://example-comp-portfolio.vercel.app/',
    },
]

function page() {
    return (
        <div className=" w-screen h-fit grid text-center relative pt-8">
            <h4 className=' text-4xl py-8 border-b-2 border-black'>Selected Projects</h4>
            <div className=" flex flex-col gap-4">
                {projects.map((p, i) => {
                    return <WorkComponent key={i} title={p.title} imgSrc={p.src} siteUrl={p.siteUrl} details={p.details} flowRev={i % 2 === 0} />
                })}

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
    );
}

export default page;
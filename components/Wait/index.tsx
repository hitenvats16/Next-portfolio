import Image from "next/image";

const Wait:React.FC<{}> = () => (
    <section className=" absolute top-0 left-0 w-full h-screen bg-blue-950 flex items-center justify-center z-20 p-10">
        <Image width={500} height={500} src={'https://media.tenor.com/n93adVox4YAAAAAd/wait-here-cary-conrad.gif'} alt="gif"/>
    </section>
)

export default Wait
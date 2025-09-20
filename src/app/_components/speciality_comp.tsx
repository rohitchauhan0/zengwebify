import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

interface Props {
    img: string,
    title: string,
    p1: string,
    p2: string,
    p3: string
}

const SpecialityComp = ({ img, title, p1, p2, p3 }: Props) => {
    return (
        <div className=' flex items-center space-x-10'>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center"
            >
                <Image src={img} alt={title} width={100} height={100} className="rounded-full" />
            </motion.div>
            <div>
                <h3 className='text-2xl font-bold font-bricolage-grotesque'>{title}</h3>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
        </div>
    )
}

export default SpecialityComp
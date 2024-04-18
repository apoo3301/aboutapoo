"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillsData = ({ src, width, height, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVar = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animDelay = 0.3
    
    return (
        <motion.div ref={ref} initial="hidden" variants={imageVar} animate={inView ? "visible" : "hidden"} custom={index} transition={{delay: index * animDelay}}>
            <Image src={src} width={width} height={height} alt="skillsimg" />
        </motion.div>
    )
}

export default SkillsData;
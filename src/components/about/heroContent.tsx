"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motions";
import { SparkleIcon } from "lucide-react";

const HeroContent = () => {
    return (
        <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div variants={slideInFromTop} className="Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
                    <SparkleIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]"> It Student </h1>
                </motion.div>
                <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-center justify-center">
                    Providing
                    <span></span>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeroContent;
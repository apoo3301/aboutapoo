import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motions";
import HeroContent from "./heroContent";

const HeroEffect = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <video autoPlay muted loop className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover">
                <source src="/bgloop.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    )
}

export default HeroEffect;
import { Frontend_skill } from "@/constant";
import React from "react";
import SkillsData from "@/components/skills/skillsData";

const Skills = () => {
    return (
        <section id="skills" style={{transform: "scale(0.9)"}} className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20">
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillsData key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Skills;
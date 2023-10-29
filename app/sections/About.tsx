import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"VEDANT DHAMECHA"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Dedicated Computer Engineering UnderGraduate, Ignited with a Boundless Passion for new experiences, Thrive in fast-paced
                            environments and embrace challanges as opportunities for growth." />

                        <AnimatedBody
                            delay={0.2}
                            text="I'm a passionate developer and problem-solver with a relentless drive to create innovative and elegant solutions to real-world problems. Welcome to my corner of the digital universe, where lines of code transform into remarkable experiences."
                        />

                        <AnimatedBody
                            delay={0.4}
                            text="I'm always excited to connect with like-minded individuals, businesses, and fellow developers. Whether you have a project in mind, want to discuss the latest trends in technology, or just fancy a good coding chat, feel free to reach out to me."
                        />

                        <AnimatedBody
                            delay={0.6}
                            text="Let's embark on a journey of creativity, problem-solving, and endless possibilities together.
                            Thank you for stopping by, and I look forward to exploring the world of code with you!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlArrowDownCircle } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import Project from "./components/project";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Kiriam C. Forés</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="fixed top-0 z-30 w-full px-4 py-4 bg-transparent backdrop-blur">
                <nav className="flex items-center justify-between mx-auto max-w-7xl">
                    <motion.a
                        className="flex items-center gap-2 group"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                    >
                        <span className="text-3xl font-extrabold text-mainRed">
                            k
                        </span>
                        <span className="text-xl font-extrabold text-mainRed group-hover:translate-x-4 transition-transform duration-200">
                            -
                        </span>
                    </motion.a>
                    <ul className="hidden items-center gap-6 md:inline-flex">
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                        >
                            <a
                                href="#projects"
                                className="flex gap-1 font-semibold text-mainWhite group"
                            >
                                <span className="text-mainRed text-base">
                                    01.
                                </span>
                                <span className="text-base group-hover:text-mainRed transition-colors">
                                    Projects
                                </span>
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.4 }}
                        >
                            <a
                                href="#"
                                className="flex gap-1 font-semibold text-mainWhite group"
                            >
                                <span className="text-mainRed text-base">
                                    02.
                                </span>
                                <span className="text-base group-hover:text-mainRed transition-colors">
                                    About Me
                                </span>
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            <a
                                href="#"
                                className="flex gap-1 font-semibold text-mainWhite group"
                            >
                                <span className="text-mainRed text-base">
                                    03.
                                </span>
                                <span className="text-base group-hover:text-mainRed transition-colors">
                                    Contact
                                </span>
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.6 }}
                        >
                            <a
                                href="Kiriam_CV.pdf"
                                target="_blank"
                                className="flex font-semibold text-mainRed group p-2 border border-mainRed rounded hover:bg-mainRedLight"
                            >
                                <span className="text-base transition-colors">
                                    Resume
                                </span>
                            </a>
                        </motion.li>
                    </ul>
                    <RxHamburgerMenu
                        size="25"
                        className="text-mainWhite inline-flex md:hidden"
                    />
                </nav>
            </header>

            <main className="overflow-hidden">
                <section
                    id="main"
                    className="w-full relative min-h-screen bg-mainBlack flex flex-col justify-center items-center"
                >
                    <div className="w-full mx-auto max-w-5xl px-4 flex flex-col gap-4 items-center">
                        <motion.h1
                            className="text-mainWhite text-5xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                        >
                            <span>Hello there, my name is </span>
                            <span className="text-mainRed">Kiriam</span>
                        </motion.h1>
                        <motion.h5
                            className="text-mainWhite text-3xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.8 }}
                        >
                            <span>I am a </span>
                            <span className="text-mainBlue">Full Stack</span>
                            <span> Developer</span>
                        </motion.h5>
                    </div>
                    <a href="#projects">
                        <SlArrowDownCircle className="absolute bottom-2 animate-bounce text-3xl text-mainWhite" />
                    </a>
                </section>
                <section
                    id="projects"
                    className="w-full relative bg-mainBlack py-16 px-4"
                >
                    <div className="w-full mx-auto max-w-4xl">
                        <div className="relative flex gap-2 mb-16 items-end w-fit before:absolute before:left-full before:top-1/2 before:ml-4 before:w-[200px] before:h-px before:bg-mainBlue">
                            <span className="text-mainRed text-xl font-semibold">
                                01.
                            </span>
                            <h1 className="text-mainWhite text-3xl font-semibold">
                                Some projects I've worked on
                            </h1>
                        </div>
                        <ul className="flex flex-col gap-32">
                            <Project
                                direction="left"
                                image="techlab.jpeg"
                                imageAlt="Techlab landing page"
                                type="Personal"
                                title="Techlab"
                                description="Application that
                                    allowed normal users to register and make
                                    reservations for physical
                                    machines. Also made an
                                    administrator panel in order to
                                    manage laboratories, machines,
                                    users, reservations,
                                    consumptions, etc"
                                technologies={[
                                    "SolidJs",
                                    "Laravel",
                                    "TailwindCSS",
                                    "ChartJs",
                                    "MySQL",
                                    "Git",
                                ]}
                                github="https://github.com/kiriamcf/Techlab-2"
                            />
                            <Project
                                direction="right"
                                image="upc-bar.png"
                                imageAlt="Upc bar landing page"
                                type="Collaborative"
                                title="UPC Bar"
                                description="An application made for the bar located 
                                on the UPC. The idea behind this project is to allow 
                                students to view the menu and place orders remotely  
                                in order to pick them up later."
                                technologies={[
                                    "React",
                                    "Next.js",
                                    "TailwindCSS",
                                    "MySQL",
                                    "Git",
                                ]}
                                github="https://github.com/kiriamcf/IU-UPC"
                            />
                            <Project
                                direction="left"
                                image="leanspots.png"
                                imageAlt="Leanspots landing page"
                                type="Collaborative"
                                title="Leanspots"
                                description="StartUps ecosystem builder. Got the
                                    chance to work with the Smartaos team on updating, 
                                    rebuilding and developing further implementations 
                                    of the application."
                                technologies={[
                                    "Vue",
                                    "Laravel",
                                    "SaSS",
                                    "MySQL",
                                    "ChartJS",
                                    "Git",
                                ]}
                                link="https://leanspots.com/es"
                            />
                        </ul>
                    </div>
                </section>
                <section
                    id="aboutme"
                    className="w-full relative bg-mainBlack py-16 px-4"
                >
                    <div className="w-full mx-auto max-w-4xl">
                        <div className="relative flex gap-2 mb-16 items-end w-fit before:absolute before:left-full before:top-1/2 before:ml-4 before:w-[200px] before:h-px before:bg-mainBlue">
                            <span className="text-mainRed text-xl font-semibold">
                                02.
                            </span>
                            <h1 className="text-mainWhite text-3xl font-semibold">
                                About me
                            </h1>
                        </div>
                        <div className="flex gap-4 justify-between">
                            <div className="w-7/12 flex flex-col gap-2">
                                <p className="text-mainWhite">
                                    Hello! My name is Kiriam, and i'm a Full
                                    Stack developer. I'm currently studying ICT
                                    Systems Engineering at the UPC university
                                    but expected to graduate in a couple of
                                    months.
                                </p>
                                <p className="text-mainWhite">
                                    My passion for web developing started a
                                    couple of years ago, when I decided it would
                                    be fun to own my website and started
                                    learning the best ways to do so.
                                </p>
                                <p className="text-mainWhite">
                                    In these past two years, I've managed to
                                    learn a lot of different web development
                                    technologies, I like experimenting and
                                    finding out which ones I like the best!
                                </p>
                            </div>
                            <img
                                src="profile.jpg"
                                alt="Profile photo"
                                className="w-3/12 rounded"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;

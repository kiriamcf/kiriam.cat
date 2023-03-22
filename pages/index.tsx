import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlArrowDownCircle } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kiriam C. Forés</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 z-30 w-full px-4 py-4 bg-transparent backdrop-blur-sm">
        <nav className="flex items-center justify-between mx-auto max-w-7xl">
          <motion.a
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <span className="text-2xl font-extrabold text-mainRed">k</span>
            <span className="text-md font-extrabold text-mainRed group-hover:translate-x-4 transition-transform duration-200">
              -
            </span>
          </motion.a>
          <div className="flex items-center space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <a
                  href="#"
                  className="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  <span>CV</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                <a
                  href="#"
                  className="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Skills
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <a
                  href="#"
                  className="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Projects
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                <a
                  href="#"
                  className="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  About Me
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              >
                <a
                  href="#"
                  className="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Contact
                </a>
              </motion.li>
            </ul>
            <RxHamburgerMenu
              size="25"
              className="text-mainWhite inline-flex md:hidden"
            />
          </div>
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
            <div className="relative flex gap-2 mb-16 items-end w-fit before:absolute before:left-full before:top-1/2 before:ml-4 before:w-1/3 before:h-px before:bg-mainBlue">
              <span className="text-mainRed text-xl font-semibold">01.</span>
              <h1 className="text-mainWhite text-3xl font-semibold">
                Some projects I've worked on
              </h1>
            </div>
            <ul className="flex flex-col gap-32">
              <motion.li
                initial={{ opacity: 0, x: "25vh" }}
                whileInView={{ opacity: 1, x: "0px" }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <article className="flex items-center">
                  <img src="techlab.jpeg" alt="test" className="w-7/12" />
                  <div className="w-5/12 flex flex-col gap-2">
                    <h5 className="text-mainRed text-sm text-right">
                      Personal Project
                    </h5>
                    <h2 className="text-mainWhite text-2xl text-right mb-3">
                      Techlab
                    </h2>
                    <div className="w-[calc(100%+4rem)] z-10 -ml-16 bg-mainBlue rounded p-4 shadow-lg">
                      <p className="text-mainWhite text-right text-sm">
                        Application made for UPC that allowed normal users to
                        make reservations for physical machines. Also made an
                        administrator panel in order to manage laboratories,
                        machines, users, reservations, consumptions, etc
                      </p>
                    </div>
                    <div className="flex gap-2 text-mainWhite self-end items-center flex-wrap text-right">
                      <span className="text-sm">SolidJs</span>
                      <span className="text-sm">Laravel</span>
                      <span className="text-sm">TailwindCSS</span>
                      <span className="text-sm">Typescript</span>
                      <span className="text-sm">MySQL</span>
                    </div>
                    <a
                      href="https://github.com/kiriamcf/Techlab-2"
                      target="_blank"
                      className="self-end group"
                    >
                      <FiGithub
                        size="20"
                        className="text-mainWhite group-hover:text-mainRed transition-colors"
                      />
                    </a>
                  </div>
                </article>
              </motion.li>
              {/* <hr className="border-mainBlue" /> */}
              <li>
                <article className="flex items-center">
                  <div className="w-5/12 flex flex-col gap-2">
                    <h5 className="text-mainRed text-sm text-left">
                      Collaborative Project
                    </h5>
                    <h2 className="text-mainWhite text-2xl text-left mb-3">
                      Leanspots
                    </h2>
                    <div className="w-[calc(100%+4rem)] z-10 -mr-16 bg-mainBlue rounded p-4 shadow-lg">
                      <p className="text-mainWhite text-left text-sm">
                        Application made for UPC that allowed normal users to
                        make reservations for physical machines. Also made an
                        administrator panel in order to manage laboratories,
                        machines, users, reservations, etc
                      </p>
                    </div>
                    <div className="flex gap-2 text-mainWhite self-start items-center flex-wrap">
                      <span className="text-sm">Vue</span>
                      <span className="text-sm">Laravel</span>
                      <span className="text-sm">SaSS</span>
                      <span className="text-sm">Javascript</span>
                      <span className="text-sm">MySQL</span>
                    </div>
                    <a
                      href="https://github.com/kiriamcf/Techlab-2"
                      target="_blank"
                      className="self-start group"
                    >
                      <FiGithub
                        size="20"
                        className="text-mainWhite group-hover:text-mainRed transition-colors"
                      />
                    </a>
                  </div>
                  <img src="leanspots.png" alt="test" className="w-7/12" />
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

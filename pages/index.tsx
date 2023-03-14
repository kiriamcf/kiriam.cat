import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from "framer-motion"
import { SlArrowDownCircle } from 'react-icons/sl';

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>Kiriam C. Forés</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="fixed top-0 z-30 w-full px-2 py-4 bg-transparent backdrop-blur-sm">
          <div className="flex items-center justify-between mx-auto max-w-7xl">
            <a href="#main" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold text-mainRed">k</span>
              <span className="text-md font-extrabold text-mainRed group-hover:translate-x-4 transition-transform duration-200">-</span>
            </a>
            <div className="flex items-center space-x-1">
              <ul className="hidden space-x-2 md:inline-flex">
                <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">CV</a></li>
                <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Skills</a></li>
                <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Projects</a></li>
                <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">About Me</a></li>
                <li><a href="#" className="px-4 py-2 font-semibold text-gray-600 rounded">Contact</a></li>
              </ul>
              <div className="inline-flex md:hidden">
                <button className="flex-none px-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>
                  <span className="sr-only">Open Menu</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="scroll-smooth">
          <div id="main" className="w-full relative min-h-screen bg-mainBlack flex flex-col justify-center items-center">
            <motion.div className="flex flex-col gap-4 items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: .3 }}>
              <h1 className="text-mainWhite text-5xl">
                <span>Hello there, my name is </span>
                <span className="text-[#F05454]">Kiriam</span>
              </h1>
              <h5 className="text-mainWhite text-3xl">
                <span>I am a </span>
                <span className="text-mainBlue">Junior</span>
                <span> Full Stack Developer</span>
              </h5>
            </motion.div>
            <SlArrowDownCircle className="absolute bottom-2 animate-bounce text-3xl text-mainWhite"/>
          </div>
          <div className="w-full relative min-h-screen bg-black flex flex-col justify-center items-center">
            <motion.div className="flex flex-col gap-4 items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h1 className="text-mainWhite text-5xl">
                  <span>Hello there, my name is </span>
                  <span className="text-[#F05454]">Kiriam</span>
              </h1>
              <h5 className="text-mainWhite text-3xl">
                <span>I am a </span>
                <span className="text-mainBlue">Junior</span>
                <span> Full Stack Developer</span>
              </h5>
            </motion.div>
          </div>
        </main>
    </>
  )
}

export default Home

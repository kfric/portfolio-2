import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { init } from 'ityped'

import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'

import bulma from './images/bulma.svg'
import cSharp from './images/cSharp.svg'
import css3 from './images/css3.svg'
import html5 from './images/html5.svg'
import react from './images/react.svg'
import tailwindcss from './images/tailwindcss.svg'
import hhh from './images/hhh.png'

export function Home() {
  return (
    <div
      id="home"
      className="flex h-screen items-center justify-center bg-gray-200 snap-start"
    >
      <div className="flex-col">
        <h1 className="name">Karl Frick</h1>
        <h3 className="nouns">
          Is a <span className="text-red-600">Frontend Developer</span>{' '}
          <span className="text-red-600">Designer</span>
        </h3>
        <div className="flex justify-center">
          <BsChevronCompactDown
            onClick={() => {
              document
                .getElementById('about')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-9xl text-gray-300 hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div id="about" className="flex h-screen snap-start">
      <div className="flex-col self-center m-6 md:m-48 lg:m-60 xl:m-100">
        <div className="flex justify-center">
          <BsChevronCompactUp
            onClick={() => {
              document
                .getElementById('home')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-9xl text-gray-300 hover:text-black cursor-pointer"
          />
        </div>
        <h1 className="flex justify-center text-xl sm:text-blue-600 md:text-green-600 lg:text-yellow-600">
          About Me
        </h1>
        <div className="my-10 space-y-5">
          <p className="text-indent">
            A Full-stack Web Developer from St. Petersburg, FL 🌴. With a
            passion for frontend, I enjoy creating and designing client side
            applications. I have worked on several applications and I have
            always challenged myself with learning something new each time.
          </p>
          <p className="text-indent">
            Being part of a team that values growth and continuous learning is
            something very important to me. I hope to one day be in a position
            where I'm able to mentor the next generation of developers and give
            back to the community.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-5 my-10">
          <a href="https://www.linkedin.com/in/karl-frick-8768b5109/">
            <AiFillLinkedin className="text-7xl text-blue-700" />
          </a>
          <a href="https://github.com/kfric">
            <AiFillGithub className="text-7xl" />
          </a>
          <AiOutlineDownload className="text-7xl" />
        </div>
        <div className="flex justify-center">
          <BsChevronCompactDown
            onClick={() => {
              document
                .getElementById('skills')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-9xl text-gray-300 hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <div
      id="skills"
      className="flex h-screen justify-center bg-gray-200 snap-start"
    >
      <div className="flex-col self-center">
        <div className="flex justify-center">
          <BsChevronCompactUp
            onClick={() => {
              document
                .getElementById('about')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-9xl text-gray-300 hover:text-black cursor-pointer"
          />
        </div>
        <h1 className="flex justify-center text-xl sm:text-blue-600 md:text-green-600 lg:text-yellow-600">
          Skills
        </h1>
        <div className="flex sm:flex-col my-10">
          <div className="flex flex-col justify-center sm:flex-row">
            <img src={bulma} alt="Bulma logo" width={150} className="m-5" />
            <img src={cSharp} alt="C sharp logo" width={150} className="m-5" />
            <img src={css3} alt="CSS 3 logo" width={150} className="m-5" />
          </div>
          <div className="flex flex-col justify-center sm:flex-row">
            <img src={html5} alt="HTML 5 logo" width={150} className="m-5" />
            <img src={react} alt="React logo" width={150} className="m-5" />
            <img
              src={tailwindcss}
              alt="Tailwind CSS logo"
              width={150}
              className="m-5"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <BsChevronCompactDown
            onClick={() => {
              document
                .getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-9xl text-gray-300 hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col h-screen justify-center items-center mx-5lg:mx-20 snap-start"
    >
      <div className="flex justify-center">
        <BsChevronCompactUp
          onClick={() => {
            document
              .getElementById('skills')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-9xl text-gray-300 hover:text-black cursor-pointer"
        />
      </div>
      <h1 className="flex justify-center text-xl sm:text-blue-600 md:text-green-600 lg:text-yellow-600">
        Projects
      </h1>
      <div className="flex flex-col justify-center sm:flex-row flex-wrap my-10">
        <img
          src={hhh}
          alt="Happy hour Hacks website"
          width={400}
          className="m-3 rounded-md"
        />
        <img
          src={hhh}
          alt="Happy hour Hacks website"
          width={400}
          className="m-3 rounded-md"
        />
        <img
          src={hhh}
          alt="Happy hour Hacks website"
          width={400}
          className="m-3 rounded-md"
        />
      </div>
    </div>
  )
}

export function App() {
  return (
    <div className="h-screen overflow-x-scroll snap snap-y snap-mandatory">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

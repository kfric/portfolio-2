import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'

import bulma from './images/bulma.svg'
import cSharp from './images/cSharp.svg'
import css3 from './images/css3.svg'
import html5 from './images/html5.svg'
import react from './images/react.svg'
import tailwindcss from './images/tailwindcss.svg'

export function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="flex-col">
        <h1 className="name">Karl Frick</h1>
        <h3 className="nouns">Is a Frontend Developer</h3>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div className="flex h-screen">
      <div className="flex-col self-center m-6 md:m-48 lg:m-60 xl:m-100">
        <h1 className="text-red-600 sm:text-green-600 md:text-blue-600 lg:text-yellow-600">
          About Me
        </h1>
        <p>
          A Full-stack Web Developer from St. Petersburg, FL 🌴. With a passion
          for frontend, I enjoy creating and designing client side applications.
          I have worked on several applications and I have always challenged
          myself with learning something new each time.
        </p>
        <p>
          Being part of a team that values growth and continuous learning is
          something very important to me. I hope to one day be in a position
          where I'm able to mentor the next generation of developers and give
          back to the community.
        </p>
        <div className="flex justify-center items-center space-x-5 my-10">
          <a href="https://www.linkedin.com/in/karl-frick-8768b5109/">
            <AiFillLinkedin className="text-7xl text-blue-700" />
          </a>
          <a href="https://github.com/kfric">
            <AiFillGithub className="text-7xl" />
          </a>
          <AiOutlineDownload className="text-7xl" />
        </div>
        <div className="flex justify-center items-center space-x-4 text-gray-200">
          <Link to="/">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
          <div className="justify-center items-center text-black cursor-pointer">
            <BsFillCircleFill />
          </div>
          <Link to="/skills">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
          <Link to="/projects">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex-col self-center">
        <h1 className="flex justify-center sm:text-blue-600 md:text-green-600 lg:text-yellow-600">
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
        <div className="flex justify-center items-center space-x-4 text-gray-200">
          <Link to="/">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
          <Link to="/about">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
          <div className="justify-center items-center text-black hover:text-black cursor-pointer">
            <BsFillCircleFill />
          </div>
          <Link to="/projects">
            <div className="justify-center items-center hover:text-black cursor-pointer">
              <BsFillCircleFill />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return <h1 className="text-black">Projects page</h1>
}

export function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  )
}

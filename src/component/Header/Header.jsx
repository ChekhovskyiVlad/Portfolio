import React from 'react'
import './Header.style.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export const Header = () => {

  const headerAnimation = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  const ScrollAbout = () => {
    window.scrollTo({
      top: 825,
      left: 0,
      behavior: 'smooth',
    });
  }
  const ScrollWorks = () => {
    window.scrollTo({
      top: 1870,
      left: 0,
      behavior: 'smooth',
    });
  }
  const ScrollContact = () => {
    window.scrollTo({
      top: 2998,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <motion.header className='header' initial="hidden" whileInView="visible" >
      <div className="container">

        <div className="nav">
          <motion.div variants={headerAnimation} className="nav__logo">VladChekh</motion.div>
          <ul className="nav__list">
           <a href="" className="nav__list-item"><motion.li className='nav__list-item'  variants={headerAnimation}>Home</motion.li></a>
            <motion.li className="nav__list-item" onClick={() => ScrollAbout()} variants={headerAnimation}>About Me</motion.li>
            <motion.li className="nav__list-item" onClick={() => ScrollWorks()} variants={headerAnimation}>Works</motion.li>
            <motion.li className="nav__list-item" onClick={() => ScrollContact()} variants={headerAnimation}>Contact</motion.li>
          </ul>
        </div>
      </div>
    </motion.header>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import './Footer.style.scss'
export const Footer = () => {
  const ButtonAnimation = {
    hidden: {
      y: 70,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const ScrollAbout = () => {
    window.scrollTo({
      top: 825,
      left: 0,
      behavior: 'smooth',
    });
  }
  const ScrollContact= () => {
    window.scrollTo({
      bottom: 825,
      left: 0,
      behavior: 'smooth',
    });
  }
  const ScrollHome = () => {
    window.scrollTo({
      top: 825,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <footer className='footer'>
      <div className="footer__contact">

      <motion.ul initial="hidden" whileInView="visible" variants={ButtonAnimation} className="footer__list-contact">
        <li className="footer__list-contact-item"><a href='https://t.me/maaayyhem'><img src='/img/telegram1.svg'/></a></li>
        <li className="footer__list-contact-item "><a href='https://www.instagram.com/mmaayyhem/?next=%2F'><img src='/img/instagram.svg'  className='footer__list-contact-item-inst'/></a></li>
        <li className="footer__list-contact-item"><a href="https://github.com/ChekhovskyiVlad"><img src='/img/github.svg'/></a></li>
      </motion.ul>
      </div>
    </footer>
  )
}

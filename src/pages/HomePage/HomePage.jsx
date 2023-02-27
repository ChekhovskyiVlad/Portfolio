import React from 'react'
import { motion, spring } from 'framer-motion'
import './HomePage.style.scss'
export const HomePage = () => {

  const textAnimation = {
    hidden: {
      x: -150,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  }
  const textAnimation2 = {
    hidden:{
      y: 50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  }

  return (
    <motion.div initial="hidden" whileInView="visible">

    <article className='startpiece'>
      <div className="container">
    <div className="startpiece__container">

      <motion.h1 initial="hidden" whileInView="visible" custom={1} variants={textAnimation}
    className="startpiece__title">FRONT-END <br></br> <span className='startpiece__title-2'>DEVELOPER</span></motion.h1>
      <img src='/img/startpiece__img.png' className='startpiece__img'/>
    </div>
    <div className="container__fluid">
    <motion.img initial="hidden" whileInView="visible"  variants={textAnimation} src='/img/arrow.png' className='startpiece__arrow'/>
    </div>
      <div className="buttons">
        <motion.button initial="hidden" whileInView="visible" custom={2} variants={textAnimation} className='buttons__button1'><a href='https://www.upwork.com/freelancers/~011cf41edfa5cd2a8a' className='buttons__button-href' >Hire me</a></motion.button>
        <motion.button initial="hidden" whileInView="visible" custom={2} variants={textAnimation} className='buttons__button2'><a href='/resume/Resume.pdf'className='buttons__button-href' >Download resume</a></motion.button>
      </div>
      <img src='/img/music__icon.svg' className='about__img4' />
      </div>
    </article>

    <article className="about">
      <div className="container">
        <div className="about__container">
      <div className="about__element">
      <motion.h2  initial="hidden" whileInView="visible" custom={1.3} variants={textAnimation} className="about__title">About <span className='about__title-2'>me</span></motion.h2>
      <motion.p  initial="hidden" whileInView="visible" custom={2.3} variants={textAnimation} className="about__text">Developer with more than 1 year of experience. I create websites with
      different levels of complexity and a set of tasks. Thereby trying to
      introduce new technologies into the project. The immediate goal is to
      form a further career in the IT industry, and develop experience in new
      projects.
      </motion.p>
      </div>
      <img src='/img/light.svg' className='about__img3'/>
      <img  src='/img/arrow__lang.svg' className='about__img2'/>
      <img src="/img/about__back.png " alt="about" className='about__img'/>
        </div>
      </div>
    </article>




    <article className="works">

        <img src="/img/works__background.png" alt="background" className="works__background" />
        <div className="container">
        <motion.h2 initial="hidden" whileInView="visible" variants={textAnimation} custom={1}  type={spring} className='works__title'>My recent <span>works</span></motion.h2>
        <motion.ul initial="hidden" whileInView="visible" className="works__list">
          <div className="works__inner">
          <motion.li initial="hidden" whileInView="visible" variants={textAnimation2} transition={{}} className="works__list-item">
          <a href="https://unrivaled-queijadas-360123.netlify.app/">


            <div className="project__container">
            <div className="project__imgs">
              <a href='https://github.com/ChekhovskyiVlad/GithubUsers'><img src='/img/github.svg' className='project__imgs-github' /></a>
              <img src='/img/icons8-external-link.svg' className='project__imgs-extlink' />
            </div>
              <h5 className="project__title">Github users</h5>
              <p className="project__text">The app is looking for the user's github. Used by GitHub API</p>
              <ul className="project__skills">
                <div className="project__skills-container project__skills-container-github">

                <li className="project__skills-skill">Typescript</li>
                <li className="project__skills-skill">SASS/SCSS</li>
                <li className="project__skills-skill">Redux Toolkit</li>
                </div>
              </ul>
            </div>
          </a>


         </motion.li>

          <motion.li initial="hidden" whileInView="visible" variants={textAnimation2} className="works__list-item">
            <a href="https://dainty-meringue-bd380f.netlify.app/">
          <div className="project__container">
            <div className="project__imgs">
              <a href='https://github.com/ChekhovskyiVlad/Countries'><img src='/img/github.svg' className='project__imgs-github' /></a>
              <img src='/img/icons8-external-link.svg' className='project__imgs-extlink' />
            </div>
              <h5 className="project__title">Countries</h5>
              <p className="project__text">Searches for countries, the project is made both in Javascript and in Typescript</p>
              <ul className="project__skills">
                <div className="project__skills-container">

                <li className="project__skills-skill">React</li>
                <li className="project__skills-skill">SASS/SCSS</li>
                <li className="project__skills-skill">Redux Toolkit</li>
                <li className="project__skills-skill">Typescript</li>
                </div>

              </ul>
            </div>
            </a>
          </motion.li>

          <motion.li initial="hidden" whileInView="visible" variants={textAnimation2} className="works__list-item">
            <a href="https://boisterous-pastelito-21c07c.netlify.app/home">
          <div className="project__container">
            <div className="project__imgs">
              <a href='https://github.com/ChekhovskyiVlad/projects-for-beginners'><img src='/img/github.svg' className='project__imgs-github' /></a>
              <img src='/img/icons8-external-link.svg' className='project__imgs-extlink' />
            </div>
              <h5 className="project__title">The set of mini-projects</h5>
              <p className="project__text">In this work I have collected all my mini-projects that I did during the training in react</p>
              <ul className="project__skills">
                <div className="project__skills-container">

                <li className="project__skills-skill">React</li>
                <li className="project__skills-skill">SASS/SCSS</li>
                </div>
              </ul>
            </div>
            </a>
         </motion.li>

          </div>
        </motion.ul>
      </div>
    </article>

    <article className="message">
      <div className="container">
        <div className="message__container">
          <div className="message__inner">

      <div>

        <img src='/img/keyboard.svg' className='message__img-keyboard'/>

      <motion.h1 initial="hidden" whileInView="visible" custom={2} variants={textAnimation} className="message__title">Got a project in <br></br><span>mind? </span></motion.h1>
      <img src="/img/message__img.png" alt="img" className="message__img"/>
      </div>
          </div>
      <motion.form custom={3} initial="hidden" whileInView="visible" variants={textAnimation} className="message__form" action="https://formsubmit.co/v.chek1218@gmail.com" method="POST" >
        <input type="text" className='message__form-name' placeholder='Name' required />
        <input type="email" className="message__form-email" placeholder='Email' required />
        <textarea className="message__form-text" maxLength="450" cols="60" rows="10" placeholder='Message' required />
        <button className='message__form-button'>Send Message<img src='/img/message.svg' className='message__form-button-img'/></button>
      </motion.form>
      </div>
      <img src='/img/mail.svg' className='message__img-email'/>

      </div>
    </article>
    </motion.div>
  )
}
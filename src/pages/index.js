// Step 1: Import React
import * as React from 'react'
import Navigation from '../components/navigation'
import { Link } from 'gatsby'

import { Helmet } from 'react-helmet';
      
import {
  get_started,
  top_index,
  top_index_right,
  top_index_left,
  mid_index,
  step,
  step_top,
  step_bottom,
  feature_index,
  feature_learning,
  feature_exam,
  feature_diary,
  feature_desc,
  bottom_cta,
  bottom_cta_button
} from './index.module.css'

import icon_diary from './index_components/Group 19.svg'
import icon_exam from './index_components/Group 15.svg'
import icon_fix from './index_components/Group 20.svg'
import icon_learn from './index_components/Group 18.svg'

import main_image from './index_components/Group 17.svg'

import diary from './index_components/diary.jpg'
import exam from './index_components/exam.jpg'
import learning from './index_components/learning.jpg'


// Step 2: Define your component
const HomePage = () => {
  return (

    <div>
    <Helmet>
        <title>Home page</title>
     </Helmet>
    <Navigation />
    
    <main>
      <div className={top_index}>
        <div className={top_index_left}>
          <h1>The best way to <br></br> study <br></br> and smash those exams</h1>
          <p>Classical Education is inefficient. Studying becomes difficult and time-pressured. Stuft maximises your chance of A-A* grades in the smallest amount of time.</p>
          <Link to="/getstarted"><button className={get_started}>Get started for free</button></Link>
        </div>
        <div className={top_index_right}>
          <img src={main_image} alt='main_image'></img>
        </div>
      </div>
      <div className={mid_index}>
        <div className={step}>
          <div className={step_top}>
            <img src={icon_learn} alt='icon_learn' width='40px' height='40px'></img>
            <h3>Learn</h3>
          </div>
          <div className={step_bottom}>
            <p>In whatever format you need, we’ve got you covered. Stuft covers all learning styles and lets you choose how you’d like to learn.</p>
          </div>
        </div>
        <div className={step}>
          <div className={step_top}>
            <img src={icon_fix} alt='icon_fix' width='40px' height='40px'></img>
            <h3>Improve</h3>
          </div>
          <div className={step_bottom}>
            <p>We’ll keep an eye on all your exam dates for you and make sure you’re improving with enough time to get those A*s.</p>
          </div>
        </div>
        <div className={step}>
          <div className={step_top}>
            <img src={icon_diary} alt='icon_diary' width='40px' height='40px'></img>
            <h3>Study</h3>
          </div>
          <div className={step_bottom}>
            <p>When you’re ready, we’ll notify you to start the study phase allowing you to answer real exam questions and get ready for the real thing.</p>
          </div>
        </div>
        <div className={step}>
          <div className={step_top}>
            <img src={icon_exam} alt='icon_exam' width='40px' height='40px'></img>
            <h3>Succeed</h3>
          </div>
          <div className={step_bottom}>
            <p>Stuft maximises the chance of success. We’re so confident that we’ll give you your money back if you don’t get A*s.</p>
          </div>
        </div>
        
      </div>
      <div className={feature_index}>
        <div className={feature_diary}>
          <img src={diary} alt='diary' ></img>
          <div className={feature_desc}>
            <h3>AI Timeplan to get you A*s</h3>
            <p>Our platform will generate a learning plan across multiple subjects to maximise your chance of getting A*s across them all</p>
            <Link to='/getstarted'>Find out more</Link>
          </div>
        </div>
        <div className={feature_exam}>
          <div className={feature_desc}>
            <h3>Extra Questions and Mock Papers</h3>
            <p>Our teachers have created 1000s of questions not included by the exam provider and you can build mock papers that will prepare you for the big day</p>
            <Link to='/getstarted'>Find out more</Link>
          </div>
          <img src={exam} alt='exam' ></img>
        </div>
        <div className={feature_learning}>
          <img src={learning} alt='learning' ></img>
          <div className={feature_desc}>
            <h3>Targeted Learning</h3>
            <p>Our lesson builder will develop a learning schedule personalised to your learning style and targeted towards your weaknesses</p>
            <Link to='/getstarted'>Find out more</Link>
          </div>
        </div>
      </div>
      <div className={bottom_cta}>
        <h2>Create a free account to get started</h2>
        <Link to="/getstarted" ><button className={bottom_cta_button}>Get started for free</button></Link>
        <p>Join 100s of other students to get those A*s</p>
      </div>
    </main>
    </div>
  )
}

// Step 3: Export your component
export default HomePage

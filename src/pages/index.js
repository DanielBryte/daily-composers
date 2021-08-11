// Step 1: Import your component
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import {
  heading,
} from '../components/layout.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <Layout pageTitle="About">
        <h1 className={heading}>About</h1>
        <p>Daily Composers was inspired by <a href="http://composerbirthdays.com/">composerbirthdays.com</a>, and was built to help celebrate great music</p>
        <p>Daily Composers was built with <a href="https://www.gatsbyjs.com/">Gatsby</a>.</p>

        <p>Icons made by the following creators on <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>: </p>
        <ul>
            <li> <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></li>
            <li> <a href="https://www.freepik.com" title="Freepik">Freepik</a></li>
        </ul>

        <p>Check out Today's composers of the day, browse the <Link to="/calendar" className={heading}>Calendar</Link> or click Random to explore!</p>
      </Layout>
  )
}

// Step 3: Export your component
export default AboutPage

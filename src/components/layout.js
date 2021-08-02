import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
      query {
          site {
            siteMetadata {
              title
            }
          }
  }`);

  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/today" className={navLinkText}>Today</Link></li>
          <li className={navLinkItem}><Link to="/random" className={navLinkText}>Random</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout


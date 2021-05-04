import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} style={{
      margin: `0 auto`,
      maxWidth: 900,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,}}>
      <StaticImage
        className="logo"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/wehearmore_logo.png"
        height={100}
        quality={95}
        alt="We Hear More - Showcasing Ultrasonic Excellence"
      />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://sdtultrasound.com">SDT Ultrasound Solutions</a>
      </footer>
    </div>
  )
}

export default Layout

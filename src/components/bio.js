/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/allan-rienstra.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Allan Rientra Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://linkedin.com/in/${social?.twitter || ``}`}>
            Connect with me on LinkedIn
          </a>
        </p>
      )}
    </div>
    <form name="Contact Form" method="POST" data-netlify="true" netlify>
              <input type="hidden" name="wehearmoresignup" value="Contact Form" />
              <div>
                <label>Enter Your Email to Subscribe:</label>
                <input type="email" name="email" />
                <button type="submit">Register to Hear More</button>
              </div>
            </form>
            </>
  )
}

export default Bio

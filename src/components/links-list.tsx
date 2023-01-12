/** @jsx jsx */
import * as React from "react"
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

type MyStaticQuery = {
  site: {
    siteMetadata: {
      categoriesToShow?: string[]
    }
  }
}

const LinksList = () => {
  const query = useStaticQuery<MyStaticQuery>(graphql`
  query {
    site {
      siteMetadata {
        categoriesToShow
      }
    }
  }
  `)

  return (
    <React.Fragment>
      {
        (query.site.siteMetadata.categoriesToShow.length > 1 && !query.site.siteMetadata.categoriesToShow.includes("All"))?
        query.site.siteMetadata.categoriesToShow.map((category) => (
          <Themed.a key={category} href={"#"+category}>
            {category}
          </Themed.a>
        )):""
      }
      <Themed.a key="about-me" href="aboutme">
        About Me
      </Themed.a>
      <Themed.a key="contact" href="contact">
        Contact
      </Themed.a>
    </React.Fragment>
  )
}

export default LinksList

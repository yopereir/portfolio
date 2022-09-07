/** @jsx jsx */
import * as React from "react"
import { Flex, jsx, Container, Heading, Themed, useColorMode } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import HeaderBackground from "../components/header-background"
import LeftArrow from "../assets/left-arrow"
import ThankYouMDX from "../texts/thankyou"
import useEmiliaConfig from "../hooks/use-emilia-config"
import ColorModeToggle from "../components/colormode-toggle"
import Layout from "../components/layout"

type ThankYouPageProps = {
  title: string
  areas: string[]
  description?: string
  date: string
}

type AvatarStaticQuery = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const ThankYouPage = ({ title, areas, description = ``, date }: ThankYouPageProps) => {
  const { name } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 40, height: 40, quality: 100)
        }
      }
    }
  `)

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <Container sx={{ textAlign: `center`, my: 4, zIndex: 10 }}>
      <animated.div style={backButtonProps}>
        <Link
          to="/"
          aria-label={`${name} - Back to homepage`}
          sx={{
            display: `flex`,
            alignItems: `center`,
            color: `text`,
            textDecoration: `none`,
            svg: {
              transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
            },
            "&:hover, &:focus": { svg: { transform: `translateX(-6px)` } },
          }}
        >
          <LeftArrow />
          <div
            sx={{
              overflow: `hidden`,
              borderRadius: `full`,
              width: `40px`,
              height: `40px`,
              display: `inline-block`,
              boxShadow: `md`,
              mx: 2,
            }}
          >
            {avatar?.file?.childImageSharp?.gatsbyImageData && (
              <GatsbyImage image={avatar.file.childImageSharp.gatsbyImageData} alt="Avatar" />
            )}
          </div>
          <span sx={{ fontWeight: `medium` }}>{name}</span>
        </Link>
      </animated.div>
        <div sx={{ mt: "20vh", mb: [6, 6, 7], ml: "10vw", mr: "10vw" }}>
          <animated.div style={infoProps}>
            <Themed.p sx={{ mb: 0, mt: 4 }}>{date}</Themed.p>
              <ThankYouMDX />
          </animated.div>
        </div>
      </Container>
    </Layout>
  )
}

export default ThankYouPage

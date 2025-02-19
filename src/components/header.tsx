/** @jsx jsx */
import { jsx, Heading, Flex, useColorMode } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import HeaderBackground from "./header-background"
import Location from "../assets/location"
import SocialMediaList from "./social-media-list"
import LinksList from "./links-list"
import ColorModeToggle from "./colormode-toggle"

type AvatarStaticQuery = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Header = () => {
  const { name, location, assetsPath } = useEmiliaConfig()
  const { oneLineDescription, categoriesToShow } = useSiteMetadata()
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
          gatsbyImageData(layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Flex as="header" variant="layout.projectHead">
      <HeaderBackground />
      <div sx={{ textAlign: `center`, my: 5, zIndex: 10 }}>
        <div style={{ top: "1rem", right: "1rem", position: "absolute", "textAlign": `right`}}><ColorModeToggle isDark={isDark} toggle={toggleColorMode} /></div>
        <animated.div style={fadeProps}>
          <div
            sx={{
              overflow: `hidden`,
              borderRadius: `full`,
              height: [`100px`, `140px`],
              width: [`100px`, `140px`],
              display: `inline-block`,
              boxShadow: `lg`,
              "> div:not([data-placeholder='true'])": {
                height: [`100px !important`, `140px !important`],
                width: [`100px !important`, `140px !important`],
              },
            }}
          >
            {avatar?.file?.childImageSharp?.gatsbyImageData ? (
              <GatsbyImage image={avatar.file.childImageSharp.gatsbyImageData} alt="Avatar" />
            ) : (
              <div
                sx={{
                  fontSize: 0,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  width: `100% !important`,
                  right: 0,
                  p: 3,
                  backgroundColor: `red.2`,
                }}
                data-placeholder="true"
              >
                Place an image with the name "avatar" inside the directory "{assetsPath}"
              </div>
            )}
          </div>
        </animated.div>
        <animated.div style={fadeUpProps}>
          <Heading as="h1" variant="styles.h1">
            {name}
          </Heading>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}>
          <Flex
            sx={{
              svg: {
                width: `20px`,
                height: `20px`,
                ".primary": { color: `iconPrimary` },
                ".secondary": { color: `iconSecondary` },
                mr: 2,
              },
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
            }}
          >
            {location == ""?"":<Location />} {location}
          </Flex>
        </animated.div>
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <div style={{textAlign:"center", maxWidth:"80vw"}}>{oneLineDescription}</div>
          <br/>
          <animated.div style={fadeLongProps}>
            <LinksList />
            <SocialMediaList />
          </animated.div>
          <br/>
          {categoriesToShow.length == 1?<a href={"resumes/Resume_"+categoriesToShow[0].replace(" ","-")+".docx"} target="_blank"><button value="Send Email" style={{"maxWidth":"25vw"}} className="btn-lrg submit-btn">Download CV</button></a>:""}
        </div>
      </div>
    </Flex>
  )
}

export default Header

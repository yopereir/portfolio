/** @jsx jsx */
import { Box, jsx, Container, Flex, Link, useColorMode, Themed } from "theme-ui"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import ColorModeToggle from "./colormode-toggle"
// @ts-ignore
import AboutMeMDX from "../texts/about-me"

const Footer = () => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box
      as="footer"
      variant="layout.footer"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Container>
        <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`] }}>
          <Flex
            sx={{
              textAlign: [`center`],
              flexDirection: `column`,
              justifyContent: `space-between`,
            }}
          >
            <div sx={{ t: [1, 1] }}>
              <div sx={{ display: "flex", textAliign: "center", justifyContent: `space-around`, a: { ml: [1, 1], mr: [1, 1] } }}>
                <Themed.a key="about-me" href="/aboutme">
                  About Me
                </Themed.a>
                <Themed.a key="contact" href="/contact">
                  Contact
                </Themed.a>
                <SocialMediaList />
              </div>
              <br/><br/>
              <div sx={{ color: `textMuted` }}>&copy; {new Date().getFullYear()} Yohann Pereira.</div>
            </div>
          </Flex>
        </div>
      </Container>
      {false && (
        <Container
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            mt: 4,
          }}
        >
          {isDark ? (
            <img
              width="30"
              height="30"
              src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
              alt="LekoArts Logo"
            />
          ) : (
            <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
          )}
          {` `}
          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia"
          >
            Themeeeeee
          </Link>
          <div sx={{ mx: 1 }}>by</div>
          {` `}
          <Link
            aria-label="Link to the theme author's website"
            href="https://www.lekoarts.de?utm_source=emilia&utm_medium=Theme"
          >
            LekoArts
          </Link>
        </Container>
      )}
    </Box>
  )
}

export default Footer
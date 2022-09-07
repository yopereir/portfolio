import * as React from "react"
import { get } from "theme-ui"
import { Global } from "@emotion/react"
import Footer from "./footer"
import SEO from "./seo"
import ColorModeToggle from "./colormode-toggle"
import { Flex, jsx, Container, Heading, Themed, useColorMode } from "theme-ui"

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }
  return (
  <React.Fragment>
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          background: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
        "@media(max-width: 600px)": {
          html: {
            fontSize: `16px`,
          },
        },
      })}
    />
    <SEO />
    <div style={{ top: "1rem", right: "1rem", position: "absolute", "textAlign": `right`}}><ColorModeToggle isDark={isDark} toggle={toggleColorMode} /></div>
    {children}
    <Footer />
  </React.Fragment>
)}

export default Layout

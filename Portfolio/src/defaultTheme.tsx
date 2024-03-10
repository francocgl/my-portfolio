import { createTheme } from "@mui/material"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const colors = {
  primary: {
    main: "#C4EAF2",
  },
  secondary: {
    main: "#69868C",
  },
  white: "#ffffff",
}

const breakpoints = createBreakpoints({})

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    ...colors,
  },
  typography: {
    h1: {
      fontSize: "8rem",
      fontWeight: 200,
      [breakpoints.between("md", "xl")]: {
        fontSize: "6rem",
      },
      [breakpoints.down("md")]: {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "7em",
      fontWeight: 600,
      textTransform: "uppercase",
      [breakpoints.between("md", "xl")]: {
        fontSize: "5rem",
      },
      [breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "6em",
      [breakpoints.between("md", "xl")]: {
        fontSize: "4rem",
      },
      [breakpoints.down("md")]: {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "2em",
      [breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
    },
    h5: {
      color: colors.white,
      fontWeight: 600,
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      fontSize: "1.25rem",
      [breakpoints.down("md")]: {
        fontSize: "1em",
      },
    },
    h6: {
      color: colors.primary.main,
      fontSize: "1.25rem",
    },
  },
})

export { defaultTheme, colors }

import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// To DO:
// 1. Conect it with github
// 2. Add it on Netlify and conect with Netlify form
// 3. Add my images

function Root() {
  const [mode, setMode] = useState(localStorage.getItem("themeMode") || "dark");

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#e0f2ff",
                  navbar: "#3b82f6",
                },
                secondary: {
                  main: "#e0f2ff",
                },
                background: { default: "#fff" },
                text: {
                  primary: "#1f1f24",
                  secondary: "#565662",
                  white: "#fff",
                  black: "#1f1f24",
                  blue: "#3b82f6",
                  navigation: "#7ab7fc",
                  loader: "#3b82f6",
                },
              }
            : {
                primary: {
                  main: "#272730",
                  navbar: "#272730",
                },
                secondary: {
                  main: "#e0f2ff",
                },
                background: { default: "#1f1f24" },
                text: {
                  primary: "#fff",
                  secondary: "#b7bcbe",
                  white: "#fff",
                  black: "#1f1f24",
                  blue: "#3b82f6",
                  navigation: "#4f4f56",
                  loader: "#000",
                },
              }),
        },

        typography: {
          fontFamily: '"Urbanist", sans-serif',
          h1: {
            fontSize: "72px",
            fontWeight: 700,
            "@media (max-width:767px)": { fontSize: "64px" },
            "@media (max-width:400px)": { fontSize: "50px" },
          },
          h2: {
            fontSize: "42px",
            fontWeight: 700,
            color: (theme) => theme.palette.secondary.main,
            "@media (max-width:767px)": { fontSize: "35px" },
            "@media (max-width:575px)": { fontSize: "20px" },
          },
          h3: {
            fontSize: "64px",
            fontWeight: 700,
            "@media (max-width:767px)": { fontSize: "46px" },
          },
          h4: {
            fontSize: "35px",
            fontWeight: 600,
            "@media (max-width:991px)": { fontSize: "23px" },
          },
          body1: {
            fontSize: "16px",
            fontWeight: 500,
            "@media (max-width:767px)": { fontSize: "14px" },
          },
          body2: {
            fontSize: "19px",
            fontWeight: 500,
          },
          button: {
            fontSize: "16px",
            fontWeight: 700,
          },
          subtitle1: {
            fontSize: "24px",
            fontWeight: 600,
          },
          subtitle2: {
            fontSize: "16px",
            fontWeight: 400,
          },
        },

        breakpoints: {
          values: {
            xs: 0,
            s: 400,
            sm: 767,
            md: 991,
            lg: 1320,
          },
        },

        components: {
          MuiButton: {
            styleOverrides: {
              root: ({ theme }) => ({
                textDecoration: "none",
                color: theme.palette.text.white,
                borderRadius: "15px",
                width: "190px",
                height: "60px",
              }),
            },
          },
          MuiButtonBase: {
            styleOverrides: {
              root: ({ theme }) => ({
                "&.Mui-selected": {
                  color: theme.palette.text.blue + "!important",
                },
              }),
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: () => ({
                color: theme.palette.text.navigation,
                "&:hover": {
                  backgroundColor: "unset",
                },
                "&.Mui-selected": {
                  color: "#fff !important",
                  background: "none",
                },
              }),
            },
          },
          MuiTabs: {
            styleOverrides: {
              indicator: ({ theme }) => ({
                height: "2px",
                backgroundColor: theme.palette.text.blue,
                borderRadius: "2px",
              }),
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: ({ theme }) => ({
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.text.blue,
                  },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: theme.palette.text.blue,
                  },
              }),
            },
          },
          MuiToolbar: {
            styleOverrides: {
              root: {
                minHeight: "78px",
                "@media (min-width:600px)": {
                  minHeight: "78px",
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiDrawer: {
            styleOverrides: {
              paper: {
                maxWidth: "380px",
                width: "100%",
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

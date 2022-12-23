import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import Theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StyledComponentsThemeProvider theme={Theme}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledComponentsThemeProvider>,
);

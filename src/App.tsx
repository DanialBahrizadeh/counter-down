import Container from "./components/styles/Container.styled";
import GlobalStyle from "./components/styles/global";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./components/styles/theme";
import Header from "./components/Header";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;

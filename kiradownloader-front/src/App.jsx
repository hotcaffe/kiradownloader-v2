// import './App.css';
import LaunchButton from './components/default/LaunchButton';
import { ThemeProvider } from 'styled-components'
import { dark, light } from './themes'
import GlobalStyle from './global'
import { AiOutlineDownload } from 'react-icons/ai'
import SideMenu from './components/default/SideMenu';
import Container from './components/default/Container';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <GlobalStyle />
        <Container>
          <div>Rola</div>
          <LaunchButton>
            <AiOutlineDownload/>
          </LaunchButton>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

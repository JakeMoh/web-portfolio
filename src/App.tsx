import './App.css';
import Experience from './components/Experience';
import Title from './components/Title';
import Project from './components/Project';
import Education from './components/Education';
import Game from './games/Game';
import ConnectFive from './games/AlignFive/ConnectFive';
import Footer from './components/Footer';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#06c"
    },
    background: {
      default: "#21242B",
      paper: "#21242B"
    },
  },
  components: {
    // Name of the component
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                <Title/>
                <Experience/>
                <Project/>
                <Education/>
                <Footer/>
              </Route>
              <Route path="/game">
                <Game/>
              </Route>
              <Route path="/connectfive">
                <ConnectFive/>
              </Route>
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;

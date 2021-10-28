import './App.css';
import Experience from './components/Experience';
import Title from './components/Title';
import Project from './components/Project';
import Education from './components/Education';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CssBaseline />
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Title/>
              <Experience/>
              <Project/>
              <Education/>
            </Route>
            <Route path="/test">
              <Experience/>
            </Route>
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;

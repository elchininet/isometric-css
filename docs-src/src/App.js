import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Menu } from './components/Menu';
import { KnowingTheBasicsPage } from './pages/KnowingTheBasicsPage';
import { UsingTheLibrary } from './pages/UsingTheLibrary';
import { LibraryApiPage } from './pages/LibraryApiPage';
import { CodeExamplePage } from './pages/CodeExamplePage';
import { DemoPage } from './pages/DemoPage';

export const App = () => {
  return (
    <Router basename={'/isometric-css'}>
      <Menu />
      <div className="page">
        <Switch>
        <Route path="/knowing-the-basics">
            <KnowingTheBasicsPage />
          </Route>
          <Route path="/using-the-library">
            <UsingTheLibrary />
          </Route>
          <Route path="/library-api">
            <LibraryApiPage />
          </Route>
          <Route path="/code-example">
            <CodeExamplePage />
          </Route>
          <Route path="/">
            <DemoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

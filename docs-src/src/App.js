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
import { DemoPage } from './pages/DemoPage';

export const App = () => {
  return (
    <Router basename={'/isometric-css'}>
      <Menu />
      <div className="page">
        <Switch>
          <Route path="/using-the-library">
            <UsingTheLibrary />
          </Route>
          <Route path="/library-api">
            <LibraryApiPage />
          </Route>
          <Route path="/demo">
            <DemoPage />
          </Route>
          <Route path="/">
            <KnowingTheBasicsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

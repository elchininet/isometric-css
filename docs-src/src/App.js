import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Menu } from './components/Menu';
import { KnowingTheBasicsPage } from './pages/KnowingTheBasicsPage';
import { BrowserPage } from './pages/BrowserPage';
import { DemoPage } from './pages/DemoPage';

export const App = () => {
  return (
    <Router>
      <Menu />
      <div className="page">
        <Switch>
          <Route path="/browser">
            <BrowserPage />
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

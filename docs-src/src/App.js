import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
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
        <Routes>
          <Route
            path="/knowing-the-basics"
            element={<KnowingTheBasicsPage/>}
          />
          <Route
            path="/using-the-library"
            element={<UsingTheLibrary />}
          />
          <Route
            path="/library-api"
            element={<LibraryApiPage />}
          />
          <Route
            path="/code-example"
            element={<CodeExamplePage />}
          />
          <Route
            path="/"
            element={<DemoPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

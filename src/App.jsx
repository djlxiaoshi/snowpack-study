// import React, { useState, useEffect, Suspense } from "react";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import { Suspense } from "https://cdn.skypack.dev/react@17.0.1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Refresh from "./refresh";
import PreBundle from "./pre-bundle";

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/refresh">Refresh Test</Link>
              </li>
              <li>
                <Link to="/pre-bundle">Pre-Bundle</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/refresh">
              <Refresh></Refresh>
            </Route>
            <Route path="/pre-bundle">
              <PreBundle></PreBundle>
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}
export default App;

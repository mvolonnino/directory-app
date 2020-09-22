import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;

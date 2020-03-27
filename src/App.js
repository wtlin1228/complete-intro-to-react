import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import Details from "./Details";

// const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          {/* <Suspense fallback={<h1>loading route ...</h1>}> */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;

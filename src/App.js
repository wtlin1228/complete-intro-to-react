import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" bread="Havanese" />
      <Pet name="Pepper" animal="Bird" bread="Cockatiel" />
      <Pet name="Doink" animal="Cat" bread="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

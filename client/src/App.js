import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeGamesPage from "./pages/HomeGamesPage.jsx";
import DetailsGamesPage from "./pages/DetailsGamesPage.jsx";
import AddGamesPage from "./pages/AddGamesPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeGamesPage} />
        <Route exact path="/videogames/:id" component={DetailsGamesPage} />
        <Route exact path="/create" component={AddGamesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

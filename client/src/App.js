import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/styles/app.css";
import HomeGamesPage from "./pages/HomeGamesPage.jsx";
import DetailsGamesPage from "./pages/DetailsGamesPage.jsx";
import AddGamesPage from "./pages/AddGamesPage.jsx";
import NavBar from "./components/navbar/NavBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/videogames">
          <NavBar />
          <Route exact path="/videogames" component={HomeGamesPage} />
          <Route path="/videogames/:id" component={DetailsGamesPage} />
          <Route path="/videogames/create" component={AddGamesPage} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

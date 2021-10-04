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
      <Route exact path="/" component={LandingPage} />
      <Route path="/videogames">
        <NavBar />
        <Switch>
          <Route exact path="/videogames" component={HomeGamesPage} />
          <Route path="/videogames/create" component={AddGamesPage} />
          <Route path="/videogames/:id" component={DetailsGamesPage} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import styled from "styled-components";

import Home from "../../views/Home";
import Pokedex from "../../views/Pokedex";
import Catalog from "../../views/Catalog";

import Navigation from "../Navigation";

function App() {
  const [currentView, setCurrentView] = useState("home");

  const [pokemon, setPokemon] = useState(null);

  function switchView(value) {
    setCurrentView(value);
  }

  return (
    <>
      <StyledApp>
        <StyledAppHeader>
          <Navigation onPageSelect={switchView} onSearch={setPokemon} />

          {currentView === "home" && <Home />}
          {currentView === "pokedex" && <Pokedex pokemon={pokemon} />}
          {currentView === "catalog" && <Catalog />}
        </StyledAppHeader>
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  font-family: "Roboto", sans-serif;
`;

const StyledAppHeader = styled.header`
  background-color: whitesmoke;
  min-height: 100vh;
  color: #282c34;
`;

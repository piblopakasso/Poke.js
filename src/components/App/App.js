import React, { useState } from "react";
import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "../../views/Home";
import Pokedex from "../../views/Pokedex";
import Catalog from "../../views/Catalog";
import Navigation from "../Navigation";

const queryClient = new QueryClient();

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [inputValue, setInputValue] = useState(null);
  const [initialForm, setInitialForm] = useState("default"); //thing to think (for tests "blastoise-mega")

  function switchView(value) {
    setCurrentView(value);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <StyledAppHeader>
          <Navigation onPageSelect={switchView} onSearch={setInputValue} />
          {currentView === "home" && <Home />}
          {currentView === "pokedex" && (
            <Pokedex
              pokemonName={inputValue}
              setPokemonName={setInputValue}
              pokemonForm={initialForm}
              setPokemonForm={setInitialForm}
            />
          )}
          {currentView === "catalog" && <Catalog pokemonType={inputValue} />}
        </StyledAppHeader>
      </StyledApp>
    </QueryClientProvider>
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

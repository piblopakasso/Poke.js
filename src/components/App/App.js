import React from "react";
import styled from "styled-components";

import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "../../views/Home";
import Pokedex from "../../views/Pokedex";
import Catalog from "../../views/Catalog";
import Navigation from "../Navigation";
import PokedexInitialView from "../../views/PokedexInitialView";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <StyledAppHeader>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<PokedexInitialView />} />
            <Route path="/pokedex/:query" element={<Pokedex />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
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

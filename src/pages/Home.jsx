import React from "react";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Pokemon List */}
      <PokemonList />
    </main>
  );
};

export default Home;

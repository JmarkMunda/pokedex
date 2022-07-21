import React, { createContext, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeDetails, setPokeDetails] = useState({});

  return (
    <PokeContext.Provider
      value={{
        pokeList,
        setPokeList,
        pokeDetails,
        setPokeDetails,
      }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;

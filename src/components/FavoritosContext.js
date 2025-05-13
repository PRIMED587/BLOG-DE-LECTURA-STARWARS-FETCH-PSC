import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (personaje) => {
        
        if (!favoritos.some(fav => fav.name === personaje.name)) {
            setFavoritos([...favoritos, personaje]);
        }
    };

    const eliminarFavorito = (nombre) => {
        setFavoritos(favoritos.filter(fav => fav.name !== nombre));
    };

    return (
        <FavoritosContext.Provider value={{ favoritos, agregarFavorito, eliminarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};
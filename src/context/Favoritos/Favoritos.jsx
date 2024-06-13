import { createContext, useContext, useState } from "react";

const favoritosContext = createContext()

favoritosContext.displayName ="Favoritos"

export default function FavoritosProvider({children}) {

    const [favorito, setFavorito] = useState([])

    return(
        <favoritosContext.Provider value={{favorito,setFavorito}}>
            {children}
        </favoritosContext.Provider>
    )
}




 export function useFavoritosContext() {

    const {favorito,setFavorito} = useContext(favoritosContext);

    function agregarFavorito(nuevoFavorito) {

        const favoritoRepetido = favorito.some(item  => item.id == nuevoFavorito.id);

        if(!favoritoRepetido){
            return setFavorito([...favorito,nuevoFavorito])
        } 


        let nuevaLista = [...favorito]
        nuevaLista = favorito.filter( item => item.id !== nuevoFavorito.id)
        console.log(nuevaLista)
        return setFavorito(nuevaLista)
    }


    return {favorito , agregarFavorito}
}


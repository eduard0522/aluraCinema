import { BrowserRouter, Routes, Route }  from "react-router-dom"
import Inicio from "./pages/Inicio"
import Cabecera from "./components/Cabecera"
import Favoritos from "./pages/Favoritos"
import Container from "./components/Container"
import FavoritosProvider from "./context/Favoritos/Favoritos"
function AppRoute() {

    return(
        <BrowserRouter>
            <Cabecera/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element= {<Inicio />}>  </Route>
                        <Route path="/favoritos" element= {<Favoritos />}>  </Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
        </BrowserRouter>
    )
}

export default AppRoute



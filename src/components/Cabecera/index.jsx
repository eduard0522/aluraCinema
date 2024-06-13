import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import LinkCabecera from "../CabeceraLink"

export default function Cabecera() {

    return (
        <header className={styles.cabecera}>
            <Link to="/" >
                <section className={styles.logoContainer} >
                   <span> Alura Cinema</span>
                </section>
            </Link>

            <nav>
                <LinkCabecera url={'./'}>
                    Home
                </LinkCabecera>
                <LinkCabecera url={'./favoritos'}>
                   Favoritos
                </LinkCabecera>
            </nav>

        </header>
    )
    
}


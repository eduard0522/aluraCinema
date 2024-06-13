import { Link } from "react-router-dom";
import styles from './CabeceraLink.module.css'

function LinkCabecera({url,children}) {
    return(
        <Link to={url} className={styles.link}>
            {children}    
        </Link>

    )
}

export default LinkCabecera
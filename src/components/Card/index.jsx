import { useFavoritosContext } from '../../context/Favoritos/Favoritos';
import styles from './Card.module.css'
import { GoHeart , GoHeartFill } from "react-icons/go";


function Card({id,capa,titulo}) {

    const { favorito , agregarFavorito} = useFavoritosContext()

    const isFavorito = favorito.some(fav => fav.id === id)

    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo} </h2>
            <div>
                {isFavorito ? <GoHeartFill className={styles.icono}  onClick={ () => console.log('click')}/> : <GoHeart  className={styles.icono}  onClick={ () => console.log('click')}/> }
            </div>
            
        </div>
    )
}

export default Card
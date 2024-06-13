import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import data from '../../data/db.json'
import Card from "../../components/Card";
import styles from './index.module.css'

export default function Inicio() {
    return(
        <>
         <Banner image={'home'} color={'#154580'} /> 
         <Titulo> 
            <h1>Un lugar para guardar tus videos favoritos </h1>
         </Titulo>
         
        <section className={styles.cardContainer}>
            {
                data.map( video => {
                        return (
                            <Card  key={video.id} {...video}  favorito={true} />
                    )
                })
            }
        </section>
        
        </>
        
    )
}

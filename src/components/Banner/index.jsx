import styles from './Banner.module.css'

function Banner({image,color}) {
    return (
        <div
            className={styles.banner}
            style={{backgroundImage:`url("img/banner-${image}.png")` }}
        >

            <div className={styles.gradient} style={{background:`${color}`}}> </div>
        
        </div>

    )
}

export default Banner
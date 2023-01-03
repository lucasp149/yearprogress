import { useEffect } from "react";
import styles from "./styles.module.css";


export default function Progress({ completed }) {

    useEffect(()=>{
     
     document.getElementsByClassName(styles.barraProgreso)[0].style.width = `${completed}%`;   
    })

    return (
        <div className={styles.barraCompleta}>
             <p className={styles.per}>{completed}%</p>
            <div className={styles.barraProgreso}>
               
            </div>
        </div>
    )
}
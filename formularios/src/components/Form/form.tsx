import { useState } from "react";
import styles from "./styles.module.css"

export default function Form(){
    const[name, setName] = useState("");
    const[cargo, setCargo] = useState("");
    return(
        <>
        <form className={styles.form}>
            <input className={styles.textbox} placeholder="DIgite seu nome:" type="text" value={name} onChange={(event):void => setName(event.target.value)} />
            <input className={styles.textbox} placeholder="DIgite seu cargo:" type="text" value={cargo} onChange={(event):void => setCargo(event.target.value)}/>
            <input className={styles.button} type="button" value="Cadastrar"/>
        </form>
         <p> Seu nome: {name}</p>
         <p>Seu cargo: {cargo}</p>
        </>
    )
}
import { useState } from 'react'
import styles from './style.module.css'

export default function BuscaCep(){

    const [ cep, setCep ] = useState('')
    const [ data, setData ] = useState({})

    const handleBuscar = () => {

        if(!cep) return
        fetch(`viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(result => setData(result))

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Busque o seu CEP</h1>
            <input onChange={(e) => setCep(e.target.value)} type="text" className={styles.input} />
            <button className={styles.button} onClick={handleBuscar}>pesquisar</button>
        </div>
    )
}
import styles from './style.module.css'
import { useState } from 'react'

export default function BuscaPokemon(){

    const [ pokemon, setPokemon ] = useState('')
    const [ data, setData ] = useState({})

    const handleBuscar = () => {
        if(!pokemon) return
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(result => setData(result))
    }

    console.log(pokemon, 'debug cep')
    console.log(data, 'debug data')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Busque o seu Pokemon</h1>
            <input onChange={(e) => setPokemon(e.target.value)} type="text" className={styles.input} />
            <button disabled={pokemon.length < 1 ? true : false} className={styles.button} onClick={handleBuscar}>pesquisar</button>
            {
                data && 
                    <div>
                        <img src={data?.sprites.back_default} />
                    </div>
            }
        </div>
    )
}
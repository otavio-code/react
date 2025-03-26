import { useState } from 'react'
import './styles.css'

export default function ApiPokemon() {
    // aloca o nome do pokemon que vem do input
    const [pokemon, setPokemon] = useState('')
    // aloca o dado que vem da API
    const [data, setData] = useState(null)
    // informa quando está carregando
    const [loading, setLoading] = useState(false)
    // handle errors
    const [error, setError] = useState(null)

    // variavel que dispara uma função
    const handleGetPokemon = () => {
        // verifica se tem texto dentro da variável pokemon
        if (!pokemon) return;
        // usuario clicou e antes de começar a processar, eu coloco para carregar
        setLoading(true)
        setError(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
            .then(res => {
                if (!res.ok) {
                    setError(true)
                    throw new Error('Pokemon not found')
                }
                return res.json()
            })
            .then(result => {
                // salvando o dado do pokemon na variável
                setData(result)
                // desligando o loading
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
                setData(null)
            })
    }

    return (
        <div className="pokemon-container">
            <h1>Busque seu Pokemon Favorito</h1>
            <input
                type="text"
                placeholder="Quem é esse pokemon?..."
                onChange={(e) => setPokemon(e.target.value)}
                value={pokemon}
            />
            <button
                // caso não tenha nenhum nome o botão fica disabled
                disabled={!pokemon}
                onClick={handleGetPokemon}
            >
                Gotta Catch
            </button>

            {/* quando o loading tiver true mostra o paragrafo */}
            {loading && <p>Carregando...</p>}
            
            {/* Show error message if there's an error */}
            {error && <p className="error">{error}</p>}
            
            {/* quando o data da API chegar, traz as informações */}
            {data && (
                <div className="pokemon-data">
                    <img 
                        src={data.sprites.versions['generation-v']['black-white'].animated.front_default || 
                             data.sprites.front_default} 
                        alt={`Foto do ${data.name}`} 
                    />
                    <p>{data.name}</p>
                </div>
            )}
        </div>
    );
}
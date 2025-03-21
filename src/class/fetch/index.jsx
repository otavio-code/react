import { useEffect, useState } from "react"


export default function Fetch(){

    //      dado, seta o dado,     estado inicial
    const [ data, setData ] = useState({})
    
    // mock
    const url = 'https://viacep.com.br/ws/04935090/json/'

    useEffect(() => {
        
    }, [])
    
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw new Error('Deu ruim nisso aqui: ' * res.status)
        }
        return res.json()
    })
    .then(data => {
        // inserindo o dado na variável
        return setData(data)

    })
    .catch(err => {
        console.error('Erro: ', err)
    })

    console.log(data, 'estado depois do setData')
    return (
        <div className="">
            <h1>Fetch</h1>
        </div>
    )

}
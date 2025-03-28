import { useEffect, useState } from 'react';
import './App.css';
import ApiPokemon from './class/apiPokemon';
import { Card } from './class/card'


export default function App() {
  const [ product, setProduct ] = useState(null)

  useEffect(() => {
    console.log('entrou no useEffect')
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
  }, [])

  console.log(product)

  return <div className="">
    {
      product && product.map((prd, id) => {
        return <Card key={id} image={prd.image} title={prd.category} description={prd.description}/>
      })
    }
  </div>
}
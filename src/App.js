import {useEffect, useState} from "react";
import PokemonThumnail from "./components/PokemonThumnail";

function App() {


    const [allPokemons,setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


    const getAllPokemon = async () =>{
      const res = await fetch(loadMore)
      const data = await res.json()

      setLoadMore(data.next)
      
      function createPokemonObject (result){
        result.forEach( async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setAllPokemon( currentList => [...currentList, data])
          await allPokemons.sort((a, b) => a.id - b.id)

        })
      }
      createPokemonObject(data.results)
    }


    useEffect(() =>{
      getAllPokemon()
    },[])

  return (
    <div className="app-contaner">
     <h1>Pokemon Codex</h1>
     <div className="pokemon-container">
       <div className="all-container">
        {allPokemons.map((pokemon, index) =>
        <PokemonThumnail
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type= {pokemon.types[0].type.name}
        ability= {pokemon.abilities[0].ability.name}
        move= {pokemon.moves[0].move.name}
        key={index}
        />
        )}

       </div>
       <button className="load-more" onClick={() => getAllPokemon()}>Load more</button>
     </div>
    </div>
  );
}

export default App;

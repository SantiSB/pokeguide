import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'

function usePokemonCardLogic(pokemon) {
  const dispatch = useDispatch()

  const types = pokemon.types
    .map((pokemon) =>
      pokemon.type.name.replace(/\b\w/g, (l) => l.toUpperCase())
    )
    .join(', ')

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }))
  }

  return { types, handleOnFavorite }
}

export default usePokemonCardLogic

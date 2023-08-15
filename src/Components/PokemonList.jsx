import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  const search = useSelector((state) => state.search)

  return (
    <Grid container spacing={2}>
      {pokemons
        .filter((pokemon) => {
          return pokemon.name.toLowerCase().includes(search.toLowerCase())
        })
        .map((pokemon) => (
          <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
    </Grid>
  )
}

export default PokemonList

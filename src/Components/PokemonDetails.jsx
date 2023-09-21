import Typography from '@mui/material/Typography'

function PokemonDetails({ pokemon }) {
  return (
    <>
      <Typography>
        <b>Experience:</b> {pokemon.base_experience}
      </Typography>
      <Typography>
        <b>Height:</b> {pokemon.height}
      </Typography>
      <Typography>
        <b>Weight:</b> {pokemon.weight}
      </Typography>
      <Typography>
        <b>Abilities:</b>
        {pokemon.abilities.map(
          (ability) =>
            ` ${ability.ability.name.replace(/\b\w/g, (l) =>
              l.toUpperCase()
            )} |`
        )}
      </Typography>
      <Typography>
        <b>Moves:</b>
        {pokemon.moves.map(
          (move) =>
            ` ${move.move.name.replace(/\b\w/g, (l) => l.toUpperCase())} |`
        )}
      </Typography>
    </>
  )
}

export default PokemonDetails

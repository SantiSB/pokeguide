import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import FavoriteButton from './FavoriteButton'
import usePokemonCardLogic from '../hooks/usePokemonCardLogic'

const PokemonCard = ({ pokemon }) => {
  const { types, handleOnFavorite } = usePokemonCardLogic(pokemon)

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component='img'
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        height='300'
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='h2'>
          {pokemon.name.toUpperCase()}
        </Typography>
        <Typography>Experience: {pokemon.base_experience}</Typography>
        <Typography>{types}</Typography>
      </CardContent>

      <CardActions>
        <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}>
          <Button size='small' variant='contained'>
            Details
          </Button>
        </Link>
        <FavoriteButton
          isFavorite={pokemon.favorite}
          onClick={handleOnFavorite}
        ></FavoriteButton>
      </CardActions>
    </Card>
  )
}

export default PokemonCard

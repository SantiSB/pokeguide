import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pokeball from '../assets/pokeball.ico'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PokemonDetails from './PokemonDetails'

function Details() {
  const { id } = useParams()
  const pokemon = useSelector((state) => state.pokemons).find(
    (pokemon) => pokemon.id === parseInt(id)
  )

  if (!pokemon) {
    return (
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{
          overflowY: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          style={{
            padding: '5rem 1rem 1rem 1rem',
            width: '100%',
            maxHeight: '100vh',
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        component={Paper}
        elevation={9}
        sx={{ overflowY: 'scroll', overflowX: 'hidden', height: '100vh' }}
      >
        <Box
          sx={{
            padding: '5rem 1rem 1rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <Avatar
            alt='Pokeball'
            src={pokeball}
            sx={{ width: 100, height: 100, alignSelf: 'center' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ textAlign: 'center' }}>
              {pokemon.name.toUpperCase()}
            </h1>
            {pokemon.favorite && (
              <FavoriteIcon color={'primary'} sx={{ mx: 1 }} />
            )}
          </div>
          <PokemonDetails pokemon={pokemon} />
          <Box component='form' noValidate sx={{ mt: 1 }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Button type='submit' fullWidth variant='outlined'>
                Go back
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Details

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Search from './Search'
import PokemonList from './PokemonList'

const Home = ({ pokemons, loading }) => {
  return (
    <main>
      <Box sx={{ bgcolor: 'background.paper', pt: 12, pb: 6 }}>
        <Container>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='#286bb9'
            gutterBottom
          >
            Catch &apos;Em All!!
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            Find your favorite Pokemon, discover their characteristics and catch
            them
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Search />
          </Stack>
        </Container>
      </Box>

      <Container>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </Container>
    </main>
  )
}

export default Home

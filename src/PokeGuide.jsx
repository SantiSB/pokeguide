import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsWithDetails, setLoading } from './actions'
import { getPokemon } from './api'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './Components/Layout'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import Details from './Components/Details'
import ComparisonTableLayout from './Components/ComparisonTableLayout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#286bb9',
    },
    secondary: {
      main: '#fffbf5',
    },
  },
})

function PokeGuide() {
  const pokemons = useSelector((state) => state.pokemons)
  const loading = useSelector((state) => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))

      const pokemonsRes = await getPokemon()

      await dispatch(getPokemonsWithDetails(pokemonsRes))
      await dispatch(setLoading(false))
    }
    fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Layout theme={theme}>
            <Routes>
              <Route
                exact
                path='/'
                element={<Home pokemons={pokemons} loading={loading} />}
              />
              <Route path='/pokemon/:id' element={<Details />} />
              <Route
                path='/compare'
                element={<ComparisonTableLayout pokemons={pokemons} />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </div>
  )
}

export default PokeGuide

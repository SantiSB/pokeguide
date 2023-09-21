import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './Components/Layout'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import Details from './Components/Details'
import ComparisonTableLayout from './Components/ComparisonTableLayout'
import useFetchPokemons from './hooks/useFetchPokemons'
import theme from './themes/theme'

function PokeGuide() {
  const { pokemons, loading } = useFetchPokemons()

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

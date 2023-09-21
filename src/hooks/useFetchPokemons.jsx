import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsWithDetails, setLoading } from '../actions'
import { getPokemon } from '../api'

function useFetchPokemons() {
  const pokemons = useSelector((state) => state.pokemons)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))

      try {
        const pokemonsRes = await getPokemon()
        await dispatch(getPokemonsWithDetails(pokemonsRes))
      } catch (error) {
        throw new Error(error)
      } finally {
        dispatch(setLoading(false))
      }
    }

    fetchPokemons()
  }, [])

  return { pokemons, loading }
}

export default useFetchPokemons

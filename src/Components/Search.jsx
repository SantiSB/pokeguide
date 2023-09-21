import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../actions'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

function Search() {
  const dispatch = useDispatch()

  const handleSearch = useCallback((event) => {
    dispatch(setSearch(event.target.value))
  }, [])

  return (
    <Paper
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Pokemons'
        inputProps={{ 'aria-label': 'search pokemons' }}
        onChange={handleSearch}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search

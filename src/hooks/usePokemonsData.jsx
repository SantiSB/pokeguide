import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const usePokemonsData = () => {
  const pokemons = useSelector((state) => state.pokemons)

  const gridRef = useRef()
  const [rowData, setRowData] = useState([])

  const [columnDefs, setColumnDefs] = useState([])

  useEffect(() => {
    setRowData(pokemons)
    setColumnDefs([
      { field: 'name', filter: true, headerName: 'Pokemon' },
      { field: 'base_experience', filter: true, headerName: 'Experience' },
      { field: 'height', filter: true, headerName: 'Height' },
      { field: 'weight', filter: true, headerName: 'Weight' },
      { field: 'abilities.length', filter: true, headerName: 'Abilities' },
      { field: 'moves.length', filter: true, headerName: 'Moves' },
      { field: 'types.length', filter: true, headerName: 'Types' },
    ])
  }, [pokemons])

  return { rowData, columnDefs, gridRef }
}

export default usePokemonsData

import { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

const ComparisonTable = () => {
  const pokemons = useSelector((state) => state.pokemons)

  const gridRef = useRef()
  const [rowData, setRowData] = useState([])

  // Each Column Definition results in one Column.
  const [columnDefs, setColumDefs] = useState([])

  useEffect(() => {
    setRowData(pokemons)
    setColumDefs([
      { field: 'name', filter: true, headerName: 'Pokemon' },
      { field: 'base_experience', filter: true, headerName: 'Experience' },
      { field: 'height', filter: true, headerName: 'Height' },
      { field: 'weight', filter: true, headerName: 'Weight' },
      { field: 'abilities.length', filter: true, headerName: 'Abilities' },
      { field: 'moves.length', filter: true, headerName: 'Moves' },
      { field: 'types.length', filter: true, headerName: 'Types' },
    ])
  }, [pokemons])

  return (
    <div>
      <div
        className='ag-theme-material'
        style={{
          width: '100%',
          height: '30rem',
          marginBottom: '10rem',
          border: '3px solid #c2bfc5',
        }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          rowSelection='multiple'
          style={{ color: 'red' }}
        />
      </div>
    </div>
  )
}

export default ComparisonTable

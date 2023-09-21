import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import usePokemonsData from '../hooks/usePokemonsData'

const ComparisonTable = () => {
  const { rowData, columnDefs, gridRef } = usePokemonsData()

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
        />
      </div>
    </div>
  )
}

export default ComparisonTable

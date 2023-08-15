import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ComparisonTable from './ComparisonTable'

function ComparisonTableLayout() {
  return (
    <Box sx={{ overflowY: 'hidden', height: '100vh' }}>
      <Container sx={{ padding: 10 }}>
        <h1 style={{ textAlign: 'center', color: '#286bb9' }}>
          Which is better?
        </h1>
        <ComparisonTable></ComparisonTable>
      </Container>
    </Box>
  )
}

export default ComparisonTableLayout

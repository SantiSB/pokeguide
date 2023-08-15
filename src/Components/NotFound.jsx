import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'

function NotFound() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container sx={{ mt: 15, mb: 2 }} maxWidth='sm'>
        <Typography variant='h1' gutterBottom>
          Not Found
        </Typography>
        <Typography variant='h5' gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <Link color='inherit' href='/'>
            Home
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default NotFound

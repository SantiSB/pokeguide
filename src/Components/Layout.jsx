import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' color='inherit' noWrap>
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                color: '#f7c50b',
                fontWeight: 'bolder',
              }}
            >
              Pokedex
            </Link>
          </Typography>
          <Typography variant='h6' color='inherit' noWrap>
            <Link
              to={'/compare'}
              style={{ textDecoration: 'none', color: '#ffffff' }}
            >
              Compare
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {children}
    </>
  )
}

export default Layout

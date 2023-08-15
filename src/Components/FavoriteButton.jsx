import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <IconButton aria-label='add to favorites' onClick={onClick}>
      <FavoriteIcon color={isFavorite ? 'primary' : ''} />
    </IconButton>
  )
}

export default FavoriteButton

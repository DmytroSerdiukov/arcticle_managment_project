import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AddPostButton = () => {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate('posts/create')
  }
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 100,
        right: 125,
      }}
    >
      <Button
        onClick={navigateTo}
        variant="contained"
        sx={{ borderRadius: 1, fontSize: 18 }}
      >
        +
      </Button>
    </div>
  )
}

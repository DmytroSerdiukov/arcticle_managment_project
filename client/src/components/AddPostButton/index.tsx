import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

export const AddPostButton = () => {
  const navigate = useNavigate()
  const navigateTo = () => {
    navigate('posts/create')
  }
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        position: 'fixed',
        bottom: 100,
        right: 350,
      }}
      onClick={navigateTo}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  )
}

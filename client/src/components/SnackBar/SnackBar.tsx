import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { closeSnackBar } from '../../store/features/SnackBar'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)

export default function CustomSnackBar() {
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector((state) => state.snackbar.message)
  const isOpen = useAppSelector((state) => state.snackbar.isOpen)
  const status = useAppSelector((state) => state.snackbar.status)
  const alertStatus: any = status ?? 'success'

  const handleClick = () => {
    dispatch(closeSnackBar())
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(closeSnackBar())
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertStatus}
          sx={{ width: '100%' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

import * as React from 'react'
import Icon from './Icon'
import AlertTitle from '@mui/material/AlertTitle'

enum IconTypes {
  success,
  error,
}

const Icons = {
  [IconTypes.success]: (
    <Icon severity="success">
      <AlertTitle>Success</AlertTitle>
    </Icon>
  ),
  //   [IconTypes.error]: <Alert severity="error">This is an error message!</Alert>,
}

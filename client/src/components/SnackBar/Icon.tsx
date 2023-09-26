import React, { FC } from 'react'
import Alert from '@mui/material/Alert'

interface IconProps {
  severity: string
  children?: any
}

const Icon: FC<IconProps> = ({ severity, children }): JSX.Element => {
  return <Alert severity={'success'}>{children}</Alert>
}

export default Icon

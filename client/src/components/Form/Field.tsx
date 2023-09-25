import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { FormikErrors, FormikValues, useField } from 'formik'
import { FC } from 'react'

type ICustomField = {
  name: string
  label: string
  touched: boolean
  field: FormikValues
  error: FormikErrors<string>
  props: FormikValues
}

export const CustomField: FC<ICustomField> = ({
  name,
  label,
  touched,
  field,
  error,
  ...props
}): JSX.Element => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        margin="normal"
        helperText={error && touched ? error : ''}
        {...field}
        {...props}
      />
    </>
  )
}

export const CheckBox: FC<ICustomField> = ({
  label,
  field,
  error,
  ...props
}): JSX.Element => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox {...field} {...props} />}
        label={label}
      />
    </FormGroup>
  )
}

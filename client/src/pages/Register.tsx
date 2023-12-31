import React, { FC, ReactNode, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Navigate, useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { Formik, Field, Form, ErrorMessage, FormikValues } from 'formik'
import { CheckBox, CustomField } from '../components/Form/Field'
import { schema } from '../validation'
import { registerUserThunk, setUserData } from '../store/features/Auth'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import LocalStorage from '../LocalStorage'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const defaultTheme = createTheme()

const Register: FC = (): JSX.Element => {
  const navigate = useNavigate()

  const navigateToMain = () => {
    navigate(ROUTES.MAIN)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box sx={{ mt: 1 }}>
            <RegisterForm />

            <Grid container sx={{ mt: 3, justifyContent: 'center' }}>
              <Grid item>
                <Link href={ROUTES.AUTH} variant="body2">
                  {'Already have an account? Sign In!'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default Register

const RegisterForm: FC = (): JSX.Element => {
  const [isAuthorized, setStatus] = useState(false)
  const isAuth = useAppSelector((state) => state.auth.isAuthorized)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = LocalStorage.getToken()
    const user = LocalStorage.getItem('user')
    if (token) {
      setStatus(true)
      dispatch(setUserData(user))
      navigateToMainRoute()
    } else setStatus(false)
  })

  const onSubmitHandler = (values: FormikValues) => {
    if (!schema) return
    try {
      schema.parse(values)
    } catch (error: any) {
      console.log(error)
      return error.formErrors.fieldErrors
    }
  }
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN)
  }
  const initValues = { login: '', password: '', rememberMe: false }
  return (
    <>
      {isAuth ? (
        <Navigate to={ROUTES.MAIN} />
      ) : (
        <Formik
          initialValues={initValues}
          onSubmit={(values) => {
            dispatch(registerUserThunk(values))
            if (isAuthorized) {
              navigateToMainRoute()
            }
          }}
          validationSchema={toFormikValidationSchema(schema)}
        >
          {({ errors, touched, handleChange }) => (
            <Form
              style={{ display: 'flex', flexDirection: 'column', width: 450 }}
            >
              <Field
                id="login"
                name="login"
                label="Login*"
                type="text"
                onChange={handleChange}
                component={CustomField}
                error={touched.login && errors.login}
                touched={touched}
              />
              <Field
                id="password"
                name="password"
                label="Password*"
                type="password"
                onChange={handleChange}
                component={CustomField}
                error={touched.password && errors.password}
                touched={touched}
              />
              <Field
                id="rememberMe"
                name="rememberMe"
                label="Remember Me"
                type="checkbox"
                component={CheckBox}
              />
              <Button sx={{ mt: 3 }} variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

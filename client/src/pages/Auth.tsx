import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { CheckBox, CustomField } from "../components/Form/Field";
import { Formik, Field, Form, ErrorMessage } from "formik";

const defaultTheme = createTheme();

const Auth = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <AuthForm />

            <Grid container sx={{ mt: 3, justifyContent: "center" }}>
              <Grid item>
                <Link href={ROUTES.REGISTER} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const AuthForm = () => {
  const navigate = useNavigate();
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN);
  };
  const initValues = { login: "", password: "", rememberMe: false };
  return (
    <>
      <Formik
        initialValues={initValues}
        onSubmit={(values) => {
          console.log(values);
          navigateToMainRoute();
        }}
      >
        {({ initialValues, errors, touched, handleChange }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: 450 }}
          >
            <Field
              id="login"
              name="login"
              label="Login*"
              type="text"
              onChange={handleChange}
              component={CustomField}
            />
            <Field
              id="password"
              name="password"
              label="Password*"
              type="password"
              onChange={handleChange}
              component={CustomField}
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
    </>
  );
};
export default Auth;

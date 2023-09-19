import React, { FC, ReactNode, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { CheckBox, CustomField } from "../components/Form/Field";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { schema } from "../validation";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { authUserThunk, setUserData } from "../store/features/Auth";
import LocalStorage from "../LocalStorage";

const defaultTheme = createTheme();

const Auth: FC = (): JSX.Element => {
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

type InitVals = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const AuthForm: FC = (): JSX.Element => {
  const [isAuthorized, setStatus] = useState(false);
  const isAuth = useAppSelector((state) => state.auth.isAuthorized);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = LocalStorage.getToken();
    const user = LocalStorage.getItem("user");
    if (token) {
      setStatus(true);
      dispatch(setUserData(user));
      navigateToMainRoute();
    } else setStatus(false);
  }, []);

  const navigate = useNavigate();
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN);
  };
  const initValues: InitVals = { login: "", password: "", rememberMe: false };
  return (
    <>
      {isAuth ? (
        <Navigate to={ROUTES.MAIN} />
      ) : (
        <Formik
          initialValues={initValues}
          validate={(values) => {
            if (!schema) return;
            try {
              schema.parse(values);
            } catch (error: any) {
              console.log(error);
              return error.formErrors.fieldErrors;
            }
          }}
          onSubmit={(values) => {
            dispatch(authUserThunk(values));
            if (isAuthorized) {
              console.log("authed");
              navigateToMainRoute();
            }

            // console.log(values);
          }}
        >
          {({ errors, touched, handleChange }) => (
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
                error={errors.login}
                touched={touched}
              />
              <Field
                id="password"
                name="password"
                label="Password*"
                type="password"
                onChange={handleChange}
                component={CustomField}
                error={errors.password}
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
  );
};
export default Auth;

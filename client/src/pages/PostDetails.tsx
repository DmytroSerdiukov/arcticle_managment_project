import React, { FC, ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { CustomField } from "../components/Form/Field";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PostSchema } from "../validation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const PostDetails: FC = (): JSX.Element => {
  const [isAuthorized, setStatus] = useState(false);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isAuthorized ? (
          <PostForm />
        ) : (
          <>
            <Button onClick={() => setStatus(!isAuthorized)}>Edit</Button>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              spacing={4}
            >
              <Grid item xs={12} md={8}>
                <Card sx={{ display: "flex" }}>
                  <CardContent sx={{ display: "flex", alignItem: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          paddingLeft: 10,
                        }}
                      >
                        <Typography variant="subtitle1">Title</Typography>
                        <Typography variant="body2" paragraph>
                          Description
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Container>
  );
};

export default PostDetails;

type InitVals = {
  title: string;
  description: string;
};

const PostForm = (): JSX.Element => {
  const navigate = useNavigate();
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN);
  };
  const initValues: InitVals = {
    title: "",
    description: "",
  };
  return (
    <>
      <Formik
        initialValues={initValues}
        validate={(values) => {
          if (!PostSchema) return;
          try {
            PostSchema.parse(values);
          } catch (error: any) {
            console.log(error);
            return error.formErrors.fieldErrors;
          }
        }}
        onSubmit={(values) => {
          console.log(values);
          navigateToMainRoute();
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: 450 }}
          >
            <Field
              id="title"
              name="title"
              label="Title*"
              type="text"
              onChange={handleChange}
              component={CustomField}
              error={errors.title}
              touched={touched}
            />
            <Field
              id="description"
              name="description"
              label="Description*"
              type="description"
              onChange={handleChange}
              component={CustomField}
              error={errors.description}
              touched={touched}
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

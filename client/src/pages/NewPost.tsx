import { Button, Container } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { CustomField } from "../components/Form/Field";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { NewPostSchema, PostSchema } from "../validation";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createPostThunk } from "../store/features/Posts";
import WithAuth from "../hoc/WithAuthorized";

const NewPost = (): JSX.Element => {
  return (
    <Container component="main" maxWidth={false}>
      <PostForm />
    </Container>
  );
};

const ProtectedNewPost = WithAuth(NewPost);

export default ProtectedNewPost;

type InitVals = {
  title: string;
  content: string;
};

const PostForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN);
  };
  const initValues: InitVals = {
    title: "",
    content: "",
  };
  return (
    <>
      <Formik
        initialValues={initValues}
        validate={(values) => {
          if (!NewPostSchema) return;
          try {
            NewPostSchema.parse(values);
          } catch (error: any) {
            console.log(error);
            return error.formErrors.fieldErrors;
          }
        }}
        onSubmit={(values) => {
          const data: any = {
            title: values.title,
            content: values.content,
            pubDate: new Date().toUTCString(),
            creator: user,
          };
          console.log(values);
          dispatch(createPostThunk(data));
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
              id="content"
              name="content"
              label="Description*"
              type="textarea"
              multiline={true}
              onChange={handleChange}
              component={CustomField}
              error={errors.content}
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

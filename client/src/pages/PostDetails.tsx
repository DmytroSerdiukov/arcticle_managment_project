import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { CustomField } from "../components/Form/Field";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { PostSchema } from "../validation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import WithAuth from "../hoc/WithAuthorized";
import LocalStorage from "../LocalStorage";
import { setUserData } from "../store/features/Auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { PostsAPI } from "../api/posts";
import { TextField, TextareaAutosize } from "@mui/material";
import { updatePostThunk } from "../store/features/Posts";

const PostDetails: FC = (): JSX.Element => {
  let { id } = useParams();

  const [isAuthorized, setStatus] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const dispatch = useAppDispatch();
  const [post, setPost] = useState(null);

  const getPostDetails = async () => {
    const post = await PostsAPI.getPostDetails(id);
    console.log("POST DETAILS", post);
    setPost(post);
  };

  useEffect(() => {
    getPostDetails();
    const token = LocalStorage.getToken();
    const user = LocalStorage.getItem("user");

    if (token) {
      setStatus(true);
      dispatch(setUserData(user));
    } else setStatus(false);
  }, []);

  const updatePost = (data: any) => {
    dispatch(updatePostThunk({ id, ...data }));
  };

  return (
    <Container component="main" maxWidth={false}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isAuthorized ? (
          <>
            <Button onClick={() => setEditing(!isEditing)}>
              {isEditing ? "Back" : "Edit"}
            </Button>
          </>
        ) : null}
        <PublicPostView
          details={post}
          updatePost={updatePost}
          isEditing={isEditing}
        />
      </Box>
    </Container>
  );
};

const PublicPostView = ({ details, isEditing, updatePost }: any) => {
  const user = useAppSelector((state) => state.auth.user);

  const [state, setState] = useState({
    title: "",
    content: "",
  });

  console.log(state);
  const updateValues = (e: any) => {
    if (e.target.name === "title") {
      setState({ ...state, title: e.target.value });
    }
    if (e.target.name === "content") {
      setState({ ...state, content: e.target.value });
    }
  };

  const saveChanges = () => {
    const data: any = {
      title: state.title,
      content: state.content,
      pubDate: new Date().toUTCString(),
      creator: user,
    };
    updatePost(data);
  };

  return (
    <>
      {details === null ? (
        <div>loading</div>
      ) : (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={6} sx={{ justifyContent: "center" }}>
            <Card sx={{ display: "flex", width: 1000 }}>
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
                    <Typography variant="subtitle1">
                      {details.pubDate.slice(5, 11)}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Avatar>{details.creator.slice(0, 1)}</Avatar>
                      <Typography variant="subtitle1">
                        {details.creator}
                      </Typography>
                    </div>
                    {isEditing ? (
                      <>
                        <Button onClick={saveChanges}>Save Changes</Button>

                        <TextField
                          name="title"
                          sx={{ width: { md: 900 }, marginBottom: 3 }}
                          value={state.title}
                          onChange={updateValues}
                        />
                        <TextField
                          name="content"
                          multiline
                          style={{ width: 900, padding: 5 }}
                          value={state.content}
                          onChange={updateValues}
                        />
                        {/* <TextareaAutosize innerRef={contentRef} /> */}
                      </>
                    ) : (
                      <>
                        <Typography variant="h5">{details.title}</Typography>{" "}
                        <Typography variant="body2" paragraph>
                          {details.content}
                        </Typography>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

// const ProtectedPostDetails = WithAuth(PostDetails);

export default PostDetails;

type InitVals = {
  title: string;
  description: string;
};

const PostForm = ({ details }: any): JSX.Element => {
  const navigate = useNavigate();
  const navigateToMainRoute = () => {
    navigate(ROUTES.MAIN);
  };
  const initValues: InitVals = {
    title: details.title,
    description: details.content,
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
              type="textarea"
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

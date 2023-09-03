import React, { FC, ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FeaturedPost from "../components/Post";
import Header from "../components/Header";

const posts = [
  {
    title: "How does useState() works?",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const Feed: FC = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <Header title="RSS Feed" />
      <main>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          spacing={4}
        >
          {posts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
    </Container>
  );
};
export default Feed;

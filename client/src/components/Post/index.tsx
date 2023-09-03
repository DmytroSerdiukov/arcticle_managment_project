import React, { FC, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

const Post: FC<FeaturedPostProps> = ({ post }): JSX.Element => {
  const navigate = useNavigate();
  const navigateToPost = () => {
    navigate(`/posts/1`);
  };

  return (
    <Grid item xs={12} md={8}>
      <CardActionArea onClick={navigateToPost}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ display: "flex", alignItem: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={post.image}
                sx={{ width: 48, height: 48 }}
                alt={post.imageLabel}
              />
            </div>
            <div style={styles.postTitleAndDescription}>
              <Typography variant="subtitle1">{post.title}</Typography>
              <Typography variant="body2" paragraph>
                {post.description}
              </Typography>
            </div>
            <div style={styles.date}>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
export default Post;

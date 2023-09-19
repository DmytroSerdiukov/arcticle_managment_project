import React, { FC, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "../../store/hooks";
import { deletePostThunk } from "../../store/features/Posts";
interface FeaturedPostProps {
  date: string;
  creator: string;
  // description: string;
  // image: string;
  // imageLabel: string;
  title: any;
}

const Post: FC = ({ _id, title, creator, pubDate }: any): JSX.Element => {
  console.log(_id, title, creator, pubDate);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateToPost = () => {
    navigate(`/posts/${_id}`);
  };

  const deleteItem = () => {
    console.log("DELETE POST", _id);
    dispatch(deletePostThunk(_id));
  };

  return (
    <Grid item xs={12} md={8}>
      <Card sx={{ display: "flex" }}>
        <CardContent
          onClick={navigateToPost}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: 600,
          }}
        >
          <div style={styles.postTitleAndDescription}>
            <Typography variant="subtitle1">{creator}</Typography>
            <Typography variant="subtitle1">{title}</Typography>
          </div>
          <div style={styles.date}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontSize: 14 }}
            >
              {pubDate.slice(5, 11)}
            </Typography>
          </div>
        </CardContent>
        <div onClick={deleteItem} style={{ zIndex: 10 }}>
          <ClearIcon />
        </div>
      </Card>
    </Grid>
  );
};
export default Post;

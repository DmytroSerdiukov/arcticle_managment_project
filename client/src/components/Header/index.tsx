import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { ROUTES } from "../../constants/routes";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const { title } = props;

  const navigateToAuthPage = () => {
    navigate(ROUTES.AUTH);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <TextField name="search" placeholder="Search" size="small" />
        <Button variant="contained" size="small" onClick={navigateToAuthPage}>
          Sign in
        </Button>
        <Button variant="outlined" size="small" onClick={navigateToAuthPage}>
          Log out
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

import React, { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { ROUTES } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logoutUser } from "../../store/features/Auth";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuthorized);
  const user = useAppSelector((state) => state.auth.user);
  const navigateToAuthPage = () => {
    navigate(ROUTES.AUTH);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigateToAuthPage();
  };

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "space-around",
        }}
      >
        {isAuth ? (
          <>
            <TextField name="search" placeholder="Search" size="small" />
            <div style={{ display: "flex" }}>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1 }}
              >
                {user}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={logout}
              >
                Log out
              </Button>
            </div>
          </>
        ) : (
          <Button variant="contained" size="small" onClick={navigateToAuthPage}>
            Sign in
          </Button>
        )}
      </Toolbar>
    </>
  );
};

export default Header;

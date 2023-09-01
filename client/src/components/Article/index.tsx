import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Typography, Container, Avatar, Box } from "@mui/material";
import { FC } from "react";

const Article: FC = (): ReactJSXElement => {
  return (
    <div style={{ marginTop: 15, marginBottom: 20 }}>
      <Container
        maxWidth={"sm"}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar>D</Avatar>
        <Typography variant={"body2"}>Dmytro Serdiukov</Typography>
        <Typography variant={"body2"}>May, 16</Typography>
      </Container>
      <Container
        maxWidth={"sm"}
        sx={{ display: "flex", flexDirection: "row", marginTop: 1 }}
      >
        <Container maxWidth={"sm"}>
          <Typography variant={"h6"} sx={{ fontWeight: 700 }}>
            React 22.8 is finally released !
          </Typography>
          <Typography variant={"subtitle2"}>
            New version provides new features regarding optimization perfomance
            and ...
          </Typography>
        </Container>
        <Box sx={{ width: 100, height: 80, backgroundColor: "black" }}></Box>
      </Container>
      <Container maxWidth="sm" sx={{ marginTop: 3 }}>
        <Box
          sx={{
            width: "15%",
            padding: 1,
            border: "1px solid black",
            borderRadius: 8,
          }}
        >
          <Typography variant="body2">JavaScript</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Article;

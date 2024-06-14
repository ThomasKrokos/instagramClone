import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Stack spacing={2} direction={"row"} alignItems={'center'} justifyContent={'center'}>
          <Box
            component="img"
            alt="Phone"
            src="../assets/loginpagephone.png"
            />

          <Stack direction={"column"}>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Login;

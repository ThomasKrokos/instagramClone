import { Box, Stack, Typography } from "@mui/material";
import { Image } from "mui-image";
import React from "react";

const Login = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack
          spacing={6}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image alt="Phone" src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"/>

          <Stack direction={"column"}>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
            <Typography>Login</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Login;


import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
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
          <Image
            alt="Phone"
            src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
          />

          <Stack direction={"column"}>
            <Stack spacing={1} direction={"column"} sx={{border: 1, p: 5}}>
            <Image
            alt="Phone"
            src="https://tse2.mm.bing.net/th?id=OIP.DexBeSiGPUP4igHscKierwHaCi&pid=Api"
          />
              <TextField label="Login" variant="outlined" />
              <TextField label="Password" variant="outlined" />
              <Button variant="contained">Login</Button>
              <Divider>OR</Divider>
              <Typography>Log in with Facebook</Typography>
              <Typography>Forgot Password?</Typography>
            </Stack>
            <Typography>Don't have an account? Sign up</Typography>
            <Typography>Get the app</Typography>
            <Typography>Google Play & Microsoft</Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Login;

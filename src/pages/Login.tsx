import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Image } from "mui-image";

const Login = () => {
  return (
    <>
      <Stack
        direction={"column"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
          sx={{ width: "40%", margin: "auto" }}
        >
          <Stack
            spacing={1}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              alt="Phone"
              src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"
            />

            <Stack direction={"column"}>
              <Stack spacing={1} direction={"column"} sx={{ border: 1, p: 5 }}>
                <Image
                  alt="Phone"
                  src="https://tse2.mm.bing.net/th?id=OIP.DexBeSiGPUP4igHscKierwHaCi&pid=Api"
                />
                <TextField
                  label="Phone number, username, or email"
                  variant="outlined"
                />
                <TextField label="Password" variant="outlined" />
                <Button variant="contained" sx={{ borderRadius: 3 }}>
                  Login
                </Button>
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
        <Stack>
          <Typography variant="subtitle2">
            Meta About Blog Jobs Help API Privacy Consumer Health Privacy Terms
            Locations Instagram Lite Threads Contact Uploading & Non-Users Meta
            Verified
          </Typography>
          <Typography variant="subtitle2">
            This is a clone of the Instagram login page
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;

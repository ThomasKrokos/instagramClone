// Theme.tsx
import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#4bb4f8",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { // styles applied to the Button root element
            fontSize: '1rem',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: 'none',
          },
        },
        variants: [
          {
            props: { variant: 'contained', color: 'primary' }, 
            style: {
              backgroundColor: '#4bb4f8', // color changes to darker blue when password>5 && username>0
              '&:hover': {
                backgroundColor: '#40a0d0', // need to change hover color
              },
            },
          },
        ],
      },
    },
  });

export default Theme;
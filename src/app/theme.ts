import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00F0A9',
    },
    background: {
      default: "#000",
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#000',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        subheader: {
          color: 'white', // Set the default color of MuiCardHeader subheader to white
        },
      },
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    body1: {
      color: '#fff',
    },
  },
});

export default theme;

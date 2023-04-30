import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {


    primary: {
      main: '#007bff', // new primary color
    },
    secondary: {
      main: '#ffff', // new secondary color
    },
    background: {
      default: "#eee",
      custom: "#17355F"
    },


  },


  typography: {
    fontFamily: font,
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: '#000000',
      height: 30,
      fontSize: '20px',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textTransform: 'none',
      '&': {
        color: red
      }
    }
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
      '*::-webkit-scrollbar': {
        width: '0px',
        height: '10px',
      },
      '*::-webkit-scrollbar-thumb': {
        width: '0rem',
        backgroundColor: '#D5073C',
        borderRadius: "2rem",
      },
    },
});

export default theme;
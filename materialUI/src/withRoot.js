import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

/*
Comments: Beginner's React JavaScript App: Implementing Google's Material UI Design in 2018
*/

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[600],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
     default: {
      light: blue[600],
      main: blue[500],
      dark: blue[700],
      contrastText: blue[600],
    }
  },
  focus: {
      focused: {
      color: 'red'
      }
    },
  input: {
      inkbar: {
        '&:after': {
          backgroundColor: red[600]
        }
      }
    },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ MuiThemeProvider>
    );
  }

  return WithRoot;
}


export default withRoot;

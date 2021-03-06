import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  palette: {
    primary: {
      main: '#00ab64'
    },
    secondary: {
      main: '#3398dc'
    },
    error: {
      main: '#f03434'
    },
    warning: {
      main: '#f9bf3b'
    },
    info: {
      main: '#e4f1fe'
    },
    background: {
      default: '#f9f9f9',
      paper: '#fff'
    }
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        border: 0
      },
      containedPrimary: {
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 20px',
        fontSize: 14,
        boxShadow: '0 3px 5px 2px #ccc'
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit'
      }
    }
  }
})

export default theme

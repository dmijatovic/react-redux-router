import React from 'react'
import { AppHead, AppFooter } from '../layout/AppUi';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, red, deepOrange } from 'material-ui/colors';

import './ui.scss';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * Material-ui page 
 * MuiThemeProvided is used to customize material-ui theme
 */
export const MatUiTest = () => (
  <MuiThemeProvider theme={matTheme}>
    <section className="app-page">
      <AppHead
        pageTitle="Page title passed from parent"
      />

      <MatUiSamples></MatUiSamples>
      
      <AppFooter 
        theme={matTheme}
        footerText="This is my footer stuff" 
      />
    </section>
  </MuiThemeProvider>
)
/**
 * Material-ui body with sample components
 */
export const MatUiSamples = () =>(
  <section className="MuiToolbar-gutters-36 app-body">
    <h1>Here comes content</h1>
  </section>
)

/**
 * CUSTOM Material theme definitions
 * Note! changing fonts did not worked properly
 */
const matTheme=createMuiTheme({
  palette: {
    primary: blue, // Purple and green play nicely together.
    secondary: {
      ...deepOrange,
      A400: '#00e677',
    },
    error: red,
    typography:{
      fontFamily:"'Open Sans', 'Helvetica', \"Arial\", sans-serif"
    }
  },
});


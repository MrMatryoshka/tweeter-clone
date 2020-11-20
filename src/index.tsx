import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import them from "./theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={them}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



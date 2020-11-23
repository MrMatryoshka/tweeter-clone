import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import them from "./theme";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={them}>
          <CssBaseline />
              <Router>
                  <App />
              </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



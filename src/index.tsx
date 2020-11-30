import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import them from "./theme";
import {store} from "./components/store/store";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={them}>
          <CssBaseline />
              <Router>
                  <Provider store={store}>
                      <App />
                  </Provider>
              </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



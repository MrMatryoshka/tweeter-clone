import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './pages/Signin';
import {Home} from "./pages/Home/Home";


function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/"  component={Home} />

                {/*<Route path="/user" component={UserPage} />*/}
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { SignIn } from './pages/Signin';
// import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/*<Switch>*/}
        {/*    <Route path="/signin" component={SignIn} exact />*/}
        {/*        /!*<Route path="/home" component={Home} />*!/*/}
        {/*        /!*<Route path="/user" component={UserPage} />*!/*/}

        {/*</Switch>*/}
        <SignIn/>
    </div>
  );
}

export default App;

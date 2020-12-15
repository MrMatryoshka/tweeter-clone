import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SignIn} from "./pages/Signin";
import {Layout} from "./pages/Layout";
import {UserPage} from "./pages/User";
import {Home} from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/signin" component={SignIn} exact />
                <Layout>
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={UserPage} />
                </Layout>
            </Switch>
        </div>
    );
}

export default App;

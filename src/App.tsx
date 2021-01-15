import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SignIn} from "./pages/Signin/Signin";
import {Layout} from "./pages/Layout";
import {UserPage} from "./pages/User";
import {Home} from "./pages/Home/Home";
import {useDispatch} from "react-redux";
import {setUserData} from "./store/ducks/user/actionCreater";
import {AuthApi} from "./services/api/loginApi";

function App() {
    const dispatch = useDispatch();
    // TODO: сделать проверку на авторизацию через протектед роуты( реает роут будет проверять
    const checkAuth = async () => {
        try {
            const { data } = await AuthApi.getMe();
            dispatch(setUserData(data));
            // history.replace('/home');
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        checkAuth();
    }, []);

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

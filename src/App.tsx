import React from 'react';
import { Route, Switch ,useHistory } from 'react-router-dom';
import {SignIn} from "./pages/Signin/Signin";
import {Layout} from "./pages/Layout";
import {UserPage} from "./pages/User";
import {Home} from "./pages/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {setUserData} from "./store/ducks/user/actionCreater";
import {AuthApi} from "./services/api/loginApi";
import {selectIsAuth} from "./store/ducks/user/selectors";

function App() {
    const history = useHistory()
    const dispatch = useDispatch();

    const isAuth = useSelector(selectIsAuth);
    // TODO: сделать проверку на авторизацию через протектед роуты( реакт роут будет проверять)
    const checkAuth = async () => {
        try {
            const { data } = await AuthApi.getMe();
            dispatch(setUserData(data));
            history.replace('/home');
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        checkAuth().then(r => console.log(r));
    }, []);

    React.useEffect(() => {
        if (isAuth) {
            history.push('/home');
        }
    }, [isAuth]);

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

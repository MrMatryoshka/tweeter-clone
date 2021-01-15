import {ModalBlock} from "../../../components/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import React from "react";
import {useStylesSignIn} from "../theme";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Notification} from '../../../components/Notification'
import {Color} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "../../../store/ducks/user/actionCreater";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingStatus} from "../../../store/types";


interface LoginProps {
    open : boolean
    onClose: () => void
    classes: ReturnType<typeof useStylesSignIn>

}

export interface LoginModalProps {
    email: string
    password: string
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email("неверная почта").required("Введите Email"),
    password: yup.string().min(6,"Введите пароль").required('Введите пароль '),

});

export const LoginModal : React.FC<LoginProps> = ({open , onClose , classes} : LoginProps) : React.ReactElement  => {

    const dispatch = useDispatch()
    const loadingStatus= useSelector(selectUserStatus)
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });

    const { control, handleSubmit, errors } = useForm<LoginModalProps>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit = async (data: LoginModalProps) => {
            dispatch(fetchSignIn(data))
        console.log("LoginModal",data)
    }

    React.useEffect(() => {
        if(loadingStatus === LoadingStatus.SUCCESS){
            openNotificationRef.current("Авторизация успешна", "success")
            onClose()
        }else if (loadingStatus === LoadingStatus.ERROR){
            openNotificationRef.current("Неверный логин или пароль ", "error")
        }
    },[loadingStatus])


    return (
     <Notification >
         { callback => {
             openNotificationRef.current = callback;
                return(
             <ModalBlock
                 visible={open}
                 onClose={onClose}
                 classes={classes}
                 title="Войти в аккаунт">
                 <form onSubmit={handleSubmit(onSubmit)}>
                     <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                         <FormGroup aria-label="position" row>
                             <Controller
                                 as ={TextField}
                                 className={classes.loginSideField}
                                 autoFocus
                                 name="email"
                                 id="email"
                                 label="E-Mail"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 defaultValue ={''}
                                 variant="filled"
                                 control={control}
                                 type="email"
                                 helperText = {errors.email?.message}
                                 error={!!errors.email}
                                 fullWidth
                             />
                             <Controller
                                 as ={TextField}
                                 className={classes.loginSideField}
                                 name='password'
                                 id="password"
                                 label="Пароль"
                                 InputLabelProps={{
                                     shrink: true,
                                 }}

                                 defaultValue ={''}
                                 control={control}
                                 variant="filled"
                                 type="password"
                                 helperText = {errors.password?.message}
                                 error={!!errors.password}
                                 fullWidth
                             />
                             <Button  type={"submit"} variant="contained" color="primary" fullWidth>
                                 Войти
                             </Button>
                         </FormGroup>
                     </FormControl>
                 </form>
             </ModalBlock>
         )
         }
         }
     </Notification>
 )
}


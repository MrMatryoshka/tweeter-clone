import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import React from "react";
import {useStylesSignIn} from "../theme";
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {Color} from "@material-ui/lab/Alert";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {fetchSignUp} from "../../../store/ducks/user/actionCreater";
import {LoadingStatus} from "../../../store/types";
import {Notification} from "../../../components/Notification";


interface RegisterProps {
    open : boolean
    onClose: () => void
}

export interface RegisterFormProps {
    fullname:string;
    username: string;
    email: string;
    password: string;
    password2: string;
}

const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required("Введите введите имя "),
    username: yup.string().required("Введите Login"),
    email: yup.string().email("неверная почта").required("Введите Email"),
    // password: yup.string()
    //     .matches(
    //         /^[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]*$/,
    //         'Need one special character',
    //     )
    //     .min(6)
    //     .required('Введите пароль '),
    // // password2: yup.string()
    // //     .oneOf([yup.ref('password'), null], 'Не верный пароль')
    // //     .required('Password confirm is required'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password'),null],'Пароли не совпадают')
});



export const RegisterModal : React.FC<RegisterProps> = ({open , onClose } : RegisterProps) : React.ReactElement  => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
    const loadingStatus = useSelector(selectUserStatus);

    const { control, handleSubmit, errors } = useForm<RegisterFormProps>({
        resolver: yupResolver( RegisterFormSchema)
    });

    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchSignUp(data));
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Регистрация успешна!', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Чтото пошло не так ', 'error');
        }
    }, [loadingStatus]);
    return <Notification>
        {
            callback => {
                openNotificationRef.current = callback;
                return (
                    <ModalBlock
                        visible={open}
                        onClose={onClose}
                        classes={classes}
                        title="Войти в аккаунт">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl className={classes.registerField} component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>

                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="fullname"
                                        className={classes.registerField}
                                        id="fullname"
                                        label="Введите ваше имя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="fullname"
                                        defaultValue=""
                                        helperText={errors.fullname?.message}
                                        error={!!errors.fullname}
                                        fullWidth
                                        autoFocus
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="username"
                                        className={classes.registerField}
                                        id="username"
                                        label="Login"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        defaultValue=""
                                        helperText={errors.username?.message}
                                        error={!!errors.username}
                                        fullWidth
                                    />

                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="email"
                                        className={classes.registerField}
                                        id="email"
                                        label="E-Mail"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="email"
                                        defaultValue=""
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        fullWidth
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="password"
                                        className={classes.registerField}
                                        id="password"
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        defaultValue=""
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
                                        fullWidth
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="password2"
                                        className={classes.registerField}
                                        id="password2"
                                        label="Пароль еще раз"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        defaultValue=""
                                        helperText={errors.password2?.message}
                                        error={!!errors.password2}
                                        fullWidth
                                    />
                                    <Button disabled={loadingStatus === LoadingStatus.LOADING} type="submit" variant="contained" color="primary" fullWidth>
                                       Регистрация
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </ModalBlock>
                )
            }
        }
    </Notification>

}

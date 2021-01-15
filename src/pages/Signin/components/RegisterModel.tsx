import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import React from "react";
import {useStylesSignIn} from "../theme";
import * as yup from "yup";


interface RegisterProps {
    open : boolean
    onClose: () => void
    classes: ReturnType<typeof useStylesSignIn>
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email("неверная почта").required("Введите Email"),
    password: yup.string()
        .matches(
            /^[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]*$/,
            'Need one special character',
        )
        .min(6)
        .required('Введите пароль '),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
});



export const RegisterModal : React.FC<RegisterProps> = ({open , onClose , classes} : RegisterProps) : React.ReactElement  => {

    return (
        <>
            <ModalBlock
                visible={open}
                onClose={onClose}
                classes={classes}
                title="Создайте учетную запись">
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Далее
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
        </>
    )
}

import {axios} from '../../core/axios';
import {LoginModalProps} from "../../pages/Signin/components/LoginModal";

interface ResponseApi {
    status:string
    data: any
}


export const AuthApi = {
   async  signIn(postData: LoginModalProps) : Promise<ResponseApi>{
        const {data} = await axios.post<ResponseApi>('auth/login' ,{userName : postData.email , password : postData.password});
        console.log("LoginAPI",postData)
        return data
    },
    async getMe() : Promise<ResponseApi>{
        const {data} = await axios.post<ResponseApi>('/users/me' );
        return data
    }
    // async  register() : Promise<string>{
    //     const {data} = await axios.get<ResponseApi>('/auth/register');
    //     return data.data
    // }
}

// @ts-ignore
window.AuthApi = AuthApi;

import {axios}from '../../core/axios';
import {Tweet} from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
    status: string;
    data: T;
}


export const TweetsApi = {
    async fetchTweets(): Promise<Tweet[]> {
        const { data } = await axios.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
}


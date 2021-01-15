import {axios} from '../../core/axios';
import {Tweet} from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
    status: string;
    data: T;
}


export const AddTweetDataApi = {
    async addTweet(payload: string): Promise<Tweet> {
        const { data } = await axios.post<Response<Tweet>>('/tweets', { text: payload });
        return data.data;
    },

}

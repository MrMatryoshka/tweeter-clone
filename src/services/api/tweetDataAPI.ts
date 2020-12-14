import {axios}from '../../core/axios';
import {Tweet} from "../../store/ducks/tweets/contracts/state";

interface Response<T> {
      status: string;
      data: T;
}


export const TweetDataApi = {
      async fetchTweetData(id: string): Promise<Tweet> {
            const { data } = await axios.get<Response<Tweet>>('/tweets/' + id);
            return data.data;
      },


}

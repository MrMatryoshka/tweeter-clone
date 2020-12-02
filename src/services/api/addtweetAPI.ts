import axios from 'axios';
import {Tweets} from "../../components/store/ducks/tweets/contracts/state";

export const AddTweetDataApi = {
    async  addTweets(payload:Tweets) : Promise<Tweets>{
        return await axios.post('/tweets',payload ).then(({data}) => data);
    }
}

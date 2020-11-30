import axios from 'axios';
import {TweetsState} from "../../components/store/ducks/tweets/contracts/state";


export const TweetApi = {
    async  fetchTweets() : Promise<TweetsState['items']>{
        return await axios.get('/tweets').then(({data}) => data);
    }
}

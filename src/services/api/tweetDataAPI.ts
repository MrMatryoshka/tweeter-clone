import axios from 'axios';
import {Tweets} from "../../components/store/ducks/tweets/contracts/state";



export const TweetDataApi = {
    async  fetchTweetData(id: string ,) : Promise<Tweets[]>{
        return await axios.get('/tweets?_sort=id&_order=desc' + id).then(({data}) => data);
    }
}

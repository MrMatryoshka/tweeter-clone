import axios from 'axios';
import {TagsState} from "../../store/ducks/tags/contracts/state";


export const TagsApi = {
    async  fetchTweets() : Promise<TagsState['items']>{
        return await axios.get('/tags').then(({data}) => data);
    }
}

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router'
import {
    selectIsTweetDataLoading,
    selectTweetDataItems
} from "../../../components/store/ducks/tweet/selectors";
import {Tweet} from "../../../components/tweets";
import {useHomeStyles} from "../theme";
import {fetchTweetData, setTweetData} from "../../../components/store/ducks/tweet/actionCreater";
import CircularProgress from "@material-ui/core/CircularProgress";

export const FullTweet : React.FC = () : React.ReactElement | null => {
    const classes = useHomeStyles();

    const dispatch = useDispatch();

    const tweetData =useSelector(selectTweetDataItems)
    const isLoading = useSelector(selectIsTweetDataLoading)
    const params :{id?:string} = useParams()

    const id = params.id

    React.useEffect(()=>{
       if(id){
           dispatch(fetchTweetData(id))
       }

       return () => {
           dispatch(setTweetData(undefined))
       }
    },[dispatch,id])

   if(isLoading){
       return (
           <div className={classes.tweetsCentred}>
               <CircularProgress />
           </div>
       )
   }

   if (tweetData) {
       return <Tweet id={tweetData._id} text={tweetData.text} classes={classes} user={tweetData.user}/>
   }

   return null

}

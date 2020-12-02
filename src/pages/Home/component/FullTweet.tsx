import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router'
import {
    selectIsTweetDataLoading,
    selectTweetDataItems
} from "../../../components/store/ducks/tweet/selectors";
import {useHomeStyles} from "../theme";
import {fetchTweetData, setTweetData} from "../../../components/store/ducks/tweet/actionCreater";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Avatar, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

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
        return (
            <Paper className={classes.fullTweet}>
                <div className={classes.tweetsHeaderUser}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        src={tweetData.user.avatarUrl}
                    />
                    <Typography>
                        <b>{tweetData.user.fullname}</b>&nbsp;
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </div>
                    </Typography>
                </div>
                <Typography className={classes.fullTweetText} gutterBottom>
                    {tweetData.text}
                </Typography>
            </Paper>
        );
    }

    return null;


}

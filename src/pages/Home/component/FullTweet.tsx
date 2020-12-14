
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { Divider, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format'
import ruLang from 'date-fns/locale/ru';
import {
    selectIsTweetDataLoading,
    selectTweetDataItems
} from "../../../store/ducks/tweet/selectors";
import {useHomeStyles} from "../theme";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreater";
import {Tweet} from "../../../components/Tweets";

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetDataItems);
    const isLoading = useSelector(selectIsTweetDataLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }

        return () => {
            dispatch(setTweetData(undefined));
        };
    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        );
    }

    if (tweetData) {
        return (
            <>
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
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} gutterBottom>
                        {tweetData.text}
                    </Typography>
                    <Typography>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLang })} · </span>
                        <span className={classes.tweetUserName}>{format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', { locale: ruLang })}</span>
                    </Typography>
                    <div className={classes.tweetFooter + classes.fullTweetFooter}>
                            <IconButton>
                                <CommentIcon style={{ fontSize: 25 }} />
                            </IconButton>
                            <IconButton>
                                <RepostIcon style={{ fontSize: 25 }} />
                            </IconButton>
                            <IconButton>
                                <LikeIcon style={{ fontSize: 25 }} />
                            </IconButton>
                            <IconButton>
                                <ShareIcon style={{ fontSize: 25 }} />
                            </IconButton>
                    </div>
                </Paper>
                <Divider />
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                    classes={classes}
                />
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                    classes={classes}
                />
                <Tweet
                    _id="1"
                    text="Any more to move? You might need to adjust your stretching routines!"
                    createdAt={new Date().toString()}
                    user={{
                        fullname: 'Arlene Andrews',
                        username: 'ArleneAndrews_1',
                        avatarUrl:
                            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg',
                    }}
                    classes={classes}
                />
            </>
        );
    }


    return null;
};

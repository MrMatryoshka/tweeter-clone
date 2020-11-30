import React from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/CommentOutlined";
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import {useHomeStyles} from "../pages/Home/theme";
import {Link} from 'react-router-dom';

interface TweetProps {
    id:string
    text : string;
    classes : ReturnType<typeof useHomeStyles>;
    user:{
        fullname : string;
        username : string;
        avatarUrl : string;
    };
}

export const Tweet : React.FC<TweetProps> = ({text,classes,user,id}:TweetProps) : React.ReactElement => {

    return (
            <Paper className={classes.tweetsHeader}>
                <Link to={`/home/tweet/${id}`} className={classes.tweet}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}
                    />
                    <div>
                        <Typography>
                            <b>{user.fullname}</b>&nbsp;
                            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                            <span className={classes.tweetUserName}>·</span>&nbsp;
                            <span className={classes.tweetUserName}>1 ч</span>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <IconButton>
                                    <CommentIcon style={{ fontSize: 20 }} />
                                </IconButton>
                                <span>1</span>
                            </div>

                            <div>
                                <IconButton>
                                    <RepostIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <LikeIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <ShareIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Link>
            </Paper>
    )
}

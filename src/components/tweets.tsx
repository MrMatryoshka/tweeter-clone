import React from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/CommentOutlined";
import RepeatIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteOutlined";
import UndoIcon from "@material-ui/icons/Undo";
import {useHomeStyle} from "../pages/Home/Home";

interface TweetProps {
    text : string;
    classes : ReturnType<typeof useHomeStyle>;
    user:{
        fullname : string;
        username : string;
        avatarUrl : string;
    };
}

export const Tweet : React.FC<TweetProps> = ({text,classes,user}:TweetProps) : React.ReactElement => {
    return (
        <Paper  variant="outlined" className={classes.tweeterHeader}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar alt={`Аватар пользователя ${user.fullname} `} src={user.avatarUrl} className={classes.tweetAvatar} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography>
                            <b> {user.fullname}</b>&nbsp;
                            <span className={classes.idName}>{user.username}</span>&nbsp;
                            <span  className={classes.idName}>~</span>&nbsp;
                            <span className={classes.idName}>1ч</span>
                        </Typography>
                        <Typography variant='body1' gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweeterFooter}>
                            <div>
                                <IconButton  color={'primary'}>
                                    <CommentIcon />
                                </IconButton>
                                <span>1</span>
                            </div>
                            <div>
                                <IconButton  color={'primary'}>
                                    <RepeatIcon/>
                                </IconButton>

                            </div>
                            <div>
                                <IconButton  color={'primary'}>
                                    <FavoriteIcon/>
                                </IconButton>

                            </div>
                            <div>
                                <IconButton  color={'primary'}>
                                    <UndoIcon />
                                </IconButton>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
    )
}

import React from 'react';
import  Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import  Typography from '@material-ui/core/Typography';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import {InputAdornment} from '@material-ui/core';

import { AddTweetForm } from '../../components/AddTweetForm';

import { SideMenu } from '../../components/SideMenu';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';
import {fetchTweets} from "../../store/ducks/tweets/actionCreater";
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems,selectIsTweetsLoading} from '../../store/ducks/tweets/selectors';
import {Tags} from "../../components/Tag";
import {selectIsTagsLoading, selectTagsItems} from "../../store/ducks/tags/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreater";
import {Route} from 'react-router-dom';
import {BackButton} from '../../components/BackButton'
import {FullTweet} from "./component/FullTweet";
import {Tweet} from "../../components/Tweets";



export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();

    const tweets = useSelector(selectTweetsItems);
    const isLoadingTweet = useSelector(selectIsTweetsLoading);

    const tags = useSelector(selectTagsItems);
    const isLoadingTag = useSelector(selectIsTagsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags());

    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Route path="/home/:any">
                                <BackButton />
                            </Route>
                            <Route path={['/home','/home/search']} exact>
                                <Typography variant="h6">
                                    Твитты
                                </Typography>
                            </Route>
                            <Route path={'/home/tweet/:id'} >
                                <Typography variant="h6">
                                    Твитнуть
                                </Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home','/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes} />
                                </div>
                                <div className={classes.addFormBottomLine} />
                            </Paper>
                        </Route>
                        <Route path={"/home"} exact >
                            {isLoadingTweet ? (
                                <div className={classes.tweetsCentred}>
                                    <CircularProgress />
                                </div>
                            ) :(

                                tweets.map((tweet) => (
                                        <Tweet
                                            key={tweet._id}
                                            text={tweet.text}
                                            classes={classes}
                                            user={tweet.user}
                                            _id={tweet._id}
                                            createdAt={tweet.createdAt}
                                            />
                                    )
                                )

                            )
                            }

                        </Route>
                        <Route path={"/home/tweet/:id"} component={FullTweet} exact />

                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                {isLoadingTag ? (
                                    <div className={classes.tweetsCentred}>
                                        <CircularProgress />
                                    </div>
                                ) : (tags.map((tag) =>(
                                    <Tags key={tag._id} classes={classes} name={tag.name}  count={tag.count}/>
                                    )
                                ))

                                }

                                <Divider component="li" />
                            </List>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Dock Of Shame"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @FavDockOfShame
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

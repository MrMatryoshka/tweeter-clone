import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import {useHomeStyles} from "../pages/Home/theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweets} from "../store/ducks/tweets/actionCreater";
import {selectAddFormLoadingState} from "../store/ducks/tweets/selectors";
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import {Snackbar} from "@material-ui/core";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
                                                              classes,
                                                              maxRows,
                                                          }: AddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = React.useState<string>('');
    const [visibleNotification ,setVisibleNotification] = React.useState<boolean>(false);

    const addFormState = useSelector(selectAddFormLoadingState);
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;

    const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };
    const handleCloseNotification = () => {
        setVisibleNotification(false);
    }

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweets(text));
        setText('');
    };

    return ( <>
        <div>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://sun1-91.userapi.com/impf/c846420/v846420396/cf52f/Lpujy9m4l8A.jpg?size=200x0&quality=96&crop=120,0,720,720&sign=d26f42753cec66b907b7b0592c7e242b&ava=1"
                />
                <TextareaAutosize
                    onChange={handleChangeTextare}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classes.tweetFooter + classes.addFormBottomActions}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress
                                    style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained">
                        {addFormState === AddFormState.LOADING ? (
                            <CircularProgress color="inherit" size={16}/>
                        ) : (
                            'Твитнуть'
                        )}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && (
                <Snackbar
                    anchorOrigin={{vertical :'top' , horizontal:'center'}}
                    open={visibleNotification}
                    onClose={handleCloseNotification}
                    message={'Ошибка твит не добавден'}
                />
            )}
        </div>
    </>
    )

};

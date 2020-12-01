import React from 'react';
import Avatar  from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import {useHomeStyles} from "../pages/Home/theme";

interface AddTweetFormProps{
    classes : ReturnType<typeof useHomeStyles>;
    maxRows?: number
}

export const AddTweetForm : React.FC<AddTweetFormProps> = ({classes ,maxRows }:AddTweetFormProps)  : React.ReactElement  => {

    const [text ,setText] = React.useState<string>('');
    const textLimitPercent = (text.length / 281) * 100;

    const handlerChangeTextare= ( e: React.FocusEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget ){
            setText(e.currentTarget.value)
        }
    };

    const handleClickAddTweet = () : void => {
       setText('')
    };

    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={'Аватарка пользователя UserAvatar'}
                    src={"https://sun1-91.userapi.com/impf/c846420/v846420396/cf52f/Lpujy9m4l8A.jpg?size=960x720&quality=96&proxy=1&sign=1dbfbfe45f6d2215e74809fe80cdc140"}
                    />
                        <TextareaAutosize
                            onChange={handlerChangeTextare}
                            className={classes.addFormTextarea}
                            placeholder={"Где моя тачка чувак ?"}
                            value={text}
                            rowsMax={maxRows}
                        />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classes.tweetFooter}>
                    <div className={ classes.addFormBottomActions}>

                        <IconButton color={"primary"}>
                            <ImageOutlinedIcon style ={{ fontSize: 26}}/>
                        </IconButton>

                        <IconButton color={"primary"}>
                            <EmojiIcon style ={{ fontSize: 26}}/>
                        </IconButton>

                    </div>

                </div>
                <div className={classes.addFormBottomRight}>
                    { text &&
                    (  <>
                    <span>{text.length}/ 280 </span>
                    <div className={classes.addFormCircleProgress}>
                        <CircularProgress
                            variant={'static'}
                            size={20}
                            thickness={4}
                            value={ textLimitPercent > 100 ? 100 : textLimitPercent }
                            style={ textLimitPercent >= 100 ? {color: 'red'} : undefined}
                        />
                        <CircularProgress
                            style={{color:'rgba(0,0,0, 0.1)'}}
                            variant={'static'}
                            size={20}
                            thickness={4}
                            value={100}
                        />
                    </div>
                    </>
                    )
                    }
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={textLimitPercent >= 100}
                        color={"primary"}
                        variant={'contained'}>
                        Твитнуть
                    </Button>
                </div>

            </div>


        </div>
    )
};
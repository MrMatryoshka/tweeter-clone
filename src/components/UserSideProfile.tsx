import { colors } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHomeStyles } from '../pages/Home/theme';

interface UserSideProfileProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({
                                                                    classes,
                                                                }: UserSideProfileProps): React.ReactElement => {
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
    const anchorRef = React.useRef<HTMLDivElement>();

    const handleOpenPopup = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        anchorRef.current = event.currentTarget;
        setVisiblePopup(true);
    };

    const handleClosePopup = (): void => {
        setVisiblePopup(false);
    };

    return (
        <>
            <div onClick={handleOpenPopup} className={classes.sideProfile}>
                <Avatar src="https://sun1-91.userapi.com/impf/c846420/v846420396/cf52f/Lpujy9m4l8A.jpg?size=200x0&quality=96&crop=120,0,720,720&sign=d26f42753cec66b907b7b0592c7e242b&ava=1" />

                <div className={classes.sideProfileInfo}>
                    <b>Ushakov Kirill</b>
                    <Typography style={{ color: colors.grey[500] }}>@Ushakov007</Typography>
                </div>
                <ArrowBottomIcon />
            </div>
            <Popover
                open={visiblePopup}
                onClose={handleClosePopup}
                anchorEl={anchorRef.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                The content of the Popover.
            </Popover>
        </>
    );
};

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Button, Hidden, Typography} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import BookIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { useHomeStyles } from '../pages/Home/theme';
import CreateIcon from '@material-ui/icons/Create';
import {ModalBlock} from "./ModalBlock";
import {AddTweetForm} from "./AddTweetForm";
import {Link} from "react-router-dom";


interface SideMenuProps{
    classes : ReturnType<typeof useHomeStyles>;
}


export const SideMenu : React.FC<SideMenuProps> = ({classes}:SideMenuProps) : React.ReactElement => {

    const [visibleAddTweet,setVisibleAddTweet] = React.useState<boolean>(false)

    const onOpenAddTweet = () => {
        setVisibleAddTweet(true)
    }
    const onCloseAddTweet = () => {
        setVisibleAddTweet(false)
    }
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to={'/home'}>
                <IconButton className={classes.logo} aria-label="" color="primary">
                    <TwitterIcon className={classes.logoIcon} />
                </IconButton>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Поиск
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemIcon} />

                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Сообщения
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookIcon className={classes.sideMenuListItemIcon} />

                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Закладки
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon} />

                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <UserIcon className={classes.sideMenuListItemIcon} />

                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant="h6">
                            Профиль
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button
                    onClick={onOpenAddTweet}
                    className={classes.sideMenuTweetButton}
                    variant="contained"
                    color="primary"
                    fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                    <div style={{width:500 }}>
                        <AddTweetForm maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
        </ul>
    );

}

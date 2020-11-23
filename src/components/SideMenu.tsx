import React from "react";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import {Button, Typography} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import BookIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import {useHomeStyle} from "../pages/Home/Home";


interface SideMenuProps{
    classes : ReturnType<typeof useHomeStyle>;
}


export const SideMenu : React.FC<SideMenuProps> = ({classes}:SideMenuProps) : React.ReactElement => {
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton aria-label="twitter" color={"primary"} className={classes.logoItem} >
                    <TwitterIcon  className={classes.logo}/>
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
               <div>
                   <NotificationsIcon className={classes.sideMenuListItemLabelIcon}/>
                   <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                       Уведомления
                   </Typography>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookIcon className={classes.sideMenuListItemLabelIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    < ListIcon className={classes.sideMenuListItemLabelIcon} />
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
               <div>
                   <UserIcon className={classes.sideMenuListItemLabelIcon}/>
                   <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                       Профиль
                   </Typography>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    fullWidth
                    className={classes.sideMenuTweetButton}
                >
                    Твитнуть
                </Button>
            </li>

        </ul>
    )
}

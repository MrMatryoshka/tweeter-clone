import React from 'react';
import {Paper, Typography} from "@material-ui/core";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Button from "@material-ui/core/Button/Button";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import Divider from "@material-ui/core/Divider/Divider";
import {useHomeStyles} from "./Home/theme";
import {useSelector} from "react-redux";
import {selectUsersItems} from "../store/ducks/users/selectors";


export const Users =  () =>  {
    const classes = useHomeStyles();

    const items = useSelector(selectUsersItems)

 return (
     <Paper className={classes.rightSideBlock}>
         <Paper className={classes.rightSideBlockHeader} variant="outlined">
             <b>Читать кого ?</b>
         </Paper>
         <List>
             { items.map(obj => (
                 <ListItem className={classes.rightSideBlockItem}>
                     <ListItemAvatar>
                         <Avatar
                             alt="Erick'Fuck OFF'Cartman"
                             src="https://2x2tv.ru/upload/resize_cache/iblock/739/975_457_2/7392250480049e1bfbf127733b316578.jpg"
                         />
                     </ListItemAvatar>
                     <ListItemText
                         primary="Erick Cartman"
                         secondary={
                             <Typography component="span" variant="body2" color="textSecondary">
                                 @FuckKyle
                             </Typography>
                         }
                     />
                     <Button color="primary">
                         <PersonAddIcon />
                     </Button>
                 </ListItem>
             ))}
             <Divider component="li" />
         </List>
     </Paper>
 )
}

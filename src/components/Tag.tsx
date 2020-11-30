import {useHomeStyles} from "../pages/Home/theme";
import React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";


interface TagProps {
    classes : ReturnType<typeof useHomeStyles>;
    name:string
    count:number

}

export const Tags : React.FC<TagProps > = ({classes,name,count}:TagProps ) : React.ReactElement => {

    return (
            <ListItem  className={classes.rightSideBlockItem}>
                <Link to={`/home/search?q${name}`}>
                <ListItemText
                    primary={name}
                    secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                            Твитов: {count}
                        </Typography>
                    }
                />
                </Link>
            </ListItem>

    )
}

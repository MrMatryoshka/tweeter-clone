import React from "react";
import {IconButton} from "@material-ui/core";
import BackIcon from "@material-ui/icons/ArrowBack";
import {Link} from "react-router-dom";
import {useHomeStyles} from "../pages/Home/theme";
import {useHistory} from "react-router-dom";

interface BackButtonProps  {
    classes: ReturnType<typeof useHomeStyles>;
}

export const BackButton : React.FC<BackButtonProps > = ({classes}:BackButtonProps ) : React.ReactElement =>{
    const history= useHistory();

    const handlerClickButton = () => {
        history.goBack()
    }
    return (
        <React.Fragment>
               <IconButton onClick={handlerClickButton}  color={'primary'} className={classes.tweetsHeaderBack}>
                   <BackIcon/>
               </IconButton>
            </React.Fragment>

    )
}

import React from 'react';
import {Theme, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import withStyles from "@material-ui/core/styles/withStyles";
import {grey} from "@material-ui/core/colors";
import {Tweet} from "../../components/tweets";
import FlareOutlinedIcon from "@material-ui/icons/FlareOutlined";
import {SideMenu} from "../../components/SideMenu";


export const useHomeStyle = makeStyles( (theme:Theme) => ({
    wrapper:{
      height: '100vh'
    },
    logoItem :{
        margin: "15px 0",
    },
    logo:{
        fontSize: 40,
    },
    sideMenuList : {
        listStyle:'none',
        margin: 0,
        padding:0,
        width:230
    },
    sideMenuListItem : {
        "&:hover":{
            "& div":{
                backgroundColor: 'rgba(29,161,242, 0.1)',
                color: "#00acee"
            }
        },
      '& div' :{
          display: 'inline-flex',
          alignItems:'center',
          padding: "0 25px 0 20px",
          borderRadius:30,
          cursor:'pointer',
          height:58,
          marginBottom: 10,
          transition:'background-color 0,15s ease-in-out'
      }
    },
    sideMenuListItemLabel : {
        fontWeight: 700 ,
        fontSize: 20,
        marginLeft: 5,
    },
    sideMenuListItemLabelIcon:{
        fontSize:25,
        marginRight:10
    },
    sideMenuTweetButton:{
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    tweeterWrapper:{
        borderRadius:0,
        height: '100%',
        borderTop: 0,
        borderBottom:0

    },
    tweeterHeader :{
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius:0,
        padding: '10px',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'rgb(245,248,250)',
        }
    },
    tweetAvatar:{
        width: theme.spacing(7),
        height:theme.spacing(7)
    },
    typoH5 :{
        fontWeight:800,
    },
    idName:{
        color:grey[500]
    },
    tweeterFooter :{
        display:'flex',
        position:'relative',
        left: -14,
        justifyContent:'space-between',
        width:450
    }

}));

// const SearchTextField = withStyles(()=>
//     createStyles({
//     input:{
//         borderRadius:30,
//         backgroundColor:'#E6ECF0',
//         height: 20,
//     }
//
//     })
// )(InputBase)


export const Home = () => {
    const classes =useHomeStyle()

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container  spacing={3} >
                <Grid item xs={3}>
                   <SideMenu
                       classes={classes}
                   />
                    </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.tweeterWrapper} variant="outlined">
                      <Paper  variant="outlined" className={classes.tweeterHeader}>
                          <Typography variant="h5" className={classes.typoH5}>Главная
                              <IconButton aria-label="star" color={"primary"} >
                                  <FlareOutlinedIcon />
                              </IconButton>
                          </Typography>
                      </Paper>
                      <Tweet
                          text={'Сенатор отметила, что у Трампа была возможность оспорить результаты выборов и суды до сих пор признавали его требования несостоятельными.\n' +
                          'Она также назвала попытки оказывать давление на законодателей штатов ради изменения результатов голосования "беспрецедентными и противоречащими демократическому процессу".'}
                          classes={classes}
                          user={
                              {
                                  fullname: 'Kiril Ushakov',
                                  username: "@kirilKO",
                                  avatarUrl: "https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"
                              }
                          }
                      />
                      <Tweet
                          text={'Сенатор отметила, что у Трампа была возможность оспорить результаты выборов и суды до сих пор признавали его требования несостоятельными.\n' +
                          'Она также назвала попытки оказывать давление на законодателей штатов ради изменения результатов голосования "беспрецедентными и противоречащими демократическому процессу".'}
                          classes={classes}
                          user={
                              {
                                  fullname: 'Kiril Ushakov',
                                  username: "@kirilKO",
                                  avatarUrl: "https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"
                              }
                          }
                      />
                      <Tweet
                          text={'Сенатор отметила, что у Трампа была возможность оспорить результаты выборов и суды до сих пор признавали его требования несостоятельными.\n' +
                          'Она также назвала попытки оказывать давление на законодателей штатов ради изменения результатов голосования "беспрецедентными и противоречащими демократическому процессу".'}
                          classes={classes}
                          user={
                              {
                                  fullname: 'Kiril Ushakov',
                                  username: "@kirilKO",
                                  avatarUrl: "https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"
                              }
                          }
                      />
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                    <TextField  label="Поиск по Твиттеру" variant="outlined" />

                </Grid>
                </Grid>

        </Container>
    )
}

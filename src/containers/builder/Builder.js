import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/Header/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const Builder = props =>{

    const classes = useStyles();

    return(
        <div>
            <Grid container direction="column" className={classes.root}>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>

            </Grid>
        </div>
    )

}

export default  Builder;
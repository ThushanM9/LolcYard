import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from "../../components/header/Header"
import Typography from '@material-ui/core/Typography';
import Table from '../../components/yardtable/YardTable'
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
                <Grid container justify="flex-start" item xs={12} style={{paddingLeft:"8px"}}>
                    <Grid item >
                        <Typography variant="h6" component="h2">
                            YARD LEVEL DEFINITION
                        </Typography>
                    </Grid>

                </Grid>

                <Grid item style={{padding:"10px"}}>
                    <Table/>
                </Grid>

            </Grid>
        </div>
    )

}

export default  Builder;
import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const data =  [
    {
        "levelCode": "EQUT",
        "levelName": "Equity",
        "description": "This is a 1st description",
        "sequenc": 1,
        "applicability": "Yes",
        "branchLevel": "Equity1",
        "status": "Active"
    },
    {
        "levelCode": "EQUT",
        "levelName": "Equity",
        "description": "This is a 2 description",
        "sequenc": 2,
        "applicability": "Yes",
        "branchLevel": "Equity2",
        "status": "Active"
    },
    {
        "levelCode": "EQUT",
        "levelName": "Equity",
        "description": "This is a 3 description",
        "sequenc": 3,
        "applicability": "No",
        "branchLevel": "",
        "status": "No"
    },
    {
        "levelCode": "EQUT",
        "levelName": "Equity",
        "description": "This is a 4 description",
        "sequenc": 4,
        "applicability": "No",
        "branchLevel": "",
        "status": "Active"
    }
];



const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
];

const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
    };
});

const YardTable = props =>{
    const classes = useStyles();
    return(
        <div>
            <Paper variant="outlined" >
                <Grid container direction="column">
                    <Grid item container style={{paddingTop:"50px",paddingLeft:"55px"}} xs={12} alignItems="center" justify="flex-start" direction="row">
                        <Grid item xs={7}>
                            <Autocomplete
                                borderRadius={16}
                                id="grouped-demo"
                                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.title}
                                style={{ width: "100%"}}
                                renderInput={(params) => <TextField  {...params}  variant="outlined" />}
                            />
                        </Grid>

                        <Grid item xs >
                            <Button variant="contained"  color="secondary" style={{borderRadius:"45px", width:"35%"}}>
                                ADD NEW
                            </Button>
                        </Grid>

                    </Grid>
                    <Grid item style={{paddingTop:"2%",paddingLeft:"5%",paddingRight:"15%"}}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Level code</TableCell>
                                        <TableCell align="left">Level Name</TableCell>
                                        <TableCell align="left">Status</TableCell>
                                        <TableCell align="left"></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow key={row.sequenc}>
                                            <TableCell align="center"component="th" scope="row">
                                                {row.levelCode}
                                            </TableCell>
                                            <TableCell align="left">{row.levelName}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="left"><Button variant="contained" color="primary">
                                                View
                                            </Button> <Button variant="contained" color="secondary">
                                                Edit
                                            </Button></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>


            </Paper>

        </div>
    )
}

export default YardTable;
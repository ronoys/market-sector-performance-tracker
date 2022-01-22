import { AppBar, Box, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './Container.css'

import MyComponent from './data';

function Container(props) {

    const [index, setIndex] = React.useState('DAY_CHANGE');

    const handleChange = (event) => {
        setIndex(event.target.value);
    };

    return (
        <div>
            <AppBar position = "static" variant="dense">
                <Toolbar>
                <Typography variant="h6" color="inherit" component="div" align = "center"> 
                    Market Sector Performance
                </Typography>
                </Toolbar>
            </AppBar>
            <div className = "container">
            <Box>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Interval</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={index}
                    label="Interval"
                    onChange={handleChange}
                    defaultValue={"DAY_CHANGE"}
                    >
                    <MenuItem value={"DAY_CHANGE"}>One Day</MenuItem>
                    <MenuItem value={"FIVE_DAY_CHANGE"}>Five Days</MenuItem>
                    <MenuItem value={"MONTH_CHANGE"}>One Month</MenuItem>
                    <MenuItem value={"THREE_MONTH_CHANGE"}>Three Months</MenuItem>
                    <MenuItem value={"YTD_CHANGE"}>YTD</MenuItem>
                    <MenuItem value={"ONE_YEAR_CHANGE"}>One Year</MenuItem>
                    <MenuItem value={"THREE_YEAR_CHANGE"}>Three Years</MenuItem>
                    <MenuItem value={"TEN_YEAR_CHANGE"}>Ten Years</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            </div>

            <div className = "container">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sector</TableCell>
                            <TableCell align = "right" width='57%'>Identifier</TableCell>
                            <TableCell align = "right">Last Date</TableCell>
                            <TableCell align = "right">Sector Performance</TableCell>
                        </TableRow>
                        
                    </TableHead>
                    
                    
                </Table>

                <MyComponent indexValue = {index}></MyComponent>
            </TableContainer>
            
            </div>
        </div>
    );
}

export default Container;
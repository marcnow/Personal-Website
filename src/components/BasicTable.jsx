import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
    var arr = props.repositories;

    
    
    
    return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500}} aria-label="simple table"> 
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Size</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arr.map((row, index) => (
                        <TableRow 
                            key={index}
                            sx={{ '&:last-child td, &last-child th': {border: 0} }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.language}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
    
    const formatDate = (created_at) => {
        var createdAt = new Date(created_at)
        console.log(createdAt.getDate())
        return (`${createdAt.getFullYear()}-${createdAt.getMonth() + 1}-${createdAt.getDate()}`)
    }

    return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table"> 
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Language</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center">Size (kb)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, index) => (
                        <TableRow 
                            key={index}
                            sx={{ '&:last-child td, &last-child th': {border: 0} }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.language}</TableCell>
                            <TableCell align="left">{formatDate(row.created_at)}</TableCell>
                            <TableCell align="left">{row.size}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}
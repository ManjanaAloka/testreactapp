// import { Grid, Typography } from '@mui/material';

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function UsersTable(props) {
    return (
        <TableContainer component={Paper} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.length > 0 ? props.users.map(user => (
                        <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell component='th'>{user.id}</TableCell>
                            <TableCell component='th'>{user.name}</TableCell>
                            <TableCell >
                                <Button sx={{ margin: '0px 10px' }} onClick={() => { }} >Update</Button>
                                <Button sx={{ margin: '0px 10px' }} onClick={() => { }} >Delete</Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell colSpan={3} style={{ textAlign: 'center' }}>No Users Found</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
// import React from 'react';

//import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'
import { mockDataEmployees } from '../../asset/data'
import { DataGrid } from '@mui/x-data-grid';

const TableShowEmployees = () => {
const columns=[
    { field: 'firstName', headerName: 'First name', width: 130 ,      sortable: true},
    { field: 'lastName', headerName: 'Last name', width: 130 ,      sortable: true},
    { field: 'startDate', headerName: 'Start Date', width: 130 ,      sortable: true},
    { field: 'department', headerName: 'Department', width: 130 ,      sortable: true},
    { field: 'birthDate', headerName: 'Date of Birth', width: 130 ,      sortable: true},
    { field: 'street', headerName: 'Street', width: 130 ,      sortable: true},
    { field: 'city', headerName: 'City', width: 130 ,      sortable: true},
    { field: 'state', headerName: 'State', width: 130 ,      sortable: true},
    { field: 'zipCode', headerName: 'Zip Code', width: 130 ,      sortable: true},
];
  
    return (
        <div style={{ height: 600, width: '100%' }}>
        <DataGrid
            getRowId={mockDataEmployees.id}
            rows={mockDataEmployees}
            columns={columns}
            >
        </DataGrid>
        </div>
    )
}

export default TableShowEmployees

/**
 *         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{backgroundColor:"green" , fontColor:"white"} }
>
                    <TableRow style={{backgroundColor:"green" , fontColor:"white"}}>
                        <TableCell align="left">First Name</TableCell>
                        <TableCell align="left">Last Name</TableCell>
                        <TableCell align="right">Start Date</TableCell>
                        <TableCell align="right">Department</TableCell>
                        <TableCell align="right">Date of Birth</TableCell>
                        <TableCell align="right">Street</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Zip Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockDataEmployees.map((employee) => (
                        <TableRow
                            key={Math.floor(Math.random() * 100)}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{employee.firstName}</TableCell>
                            <TableCell align="left">{employee.lastName}</TableCell>
                            <TableCell align="left">{employee.startDate}</TableCell>
                            <TableCell align="right">{employee.department}</TableCell>
                            <TableCell align="right">{employee.birthDate}</TableCell>
                            <TableCell align="right">{employee.street}</TableCell>
                            <TableCell align="right">{employee.city}</TableCell>
                            <TableCell align="right">{employee.state}</TableCell>
                            <TableCell align="right">{employee.zipCode}</TableCell>

                        </TableRow>

                    ))}
                </TableBody>

            </Table>
        </TableContainer>

 */
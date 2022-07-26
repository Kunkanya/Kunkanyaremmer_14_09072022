import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'

const TableShowEmployees = (data) => {

    const [pageSize, setPageSize] = useState(5)
    const columns = [
        {
            field: 'firstName',
            headerName: 'First name',
            headerClassName: "table--header",
            headerAlign: "left", width: 130,
            sortable: true
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            headerClassName: "table--header",
            headerAlign: "left",
            width: 130,
            sortable: true
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            headerClassName: "table--header",
            headerAlign: "left",
            width: 100,
            sortable: true
        },
        {
            field: 'department',
            headerName: 'Department',
            headerClassName: "table--header",
            headerAlign: "center",
            width: 210,
            sortable: true
        },
        {
            field: 'birthDate',
            headerName: 'Date of Birth',
            headerClassName: "table--header",
            headerAlign: "left",
            width: 100,
            sortable: true
        },
        {
            field: 'street',
            headerName: 'Street',
            headerClassName: "table--header",
            headerAlign: "center",
            width: 220,
            sortable: true
        },
        {
            field: 'city',
            headerName: 'City',
            headerClassName: "table--header",
            headerAlign: "center",
            width: 130,
            sortable: true
        },
        {
            field: 'state',
            headerName: 'State',
            headerClassName: "table--header",
            headerAlign: "center",
            width: 120,
            sortable: true
        },
        {
            field: 'zipCode',
            headerName: 'Zip Code',
            headerClassName: "table--header",
            width: 130,
            sortable: true
        },
    ];

    const rowsData = data.data

    return (
        <Box sx={{
            height: 600,
            width: '100%',
            '& .table--header': {
                backgroundColor: 'rgba(109, 133,12, 0.2)',
            }
        }}>
            <DataGrid
                getRowId={rowsData.id}
                rows={rowsData}
                columns={columns}
                pageSize={pageSize}
                autoHeight ={true}
            
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                pagination
                sx={{
                    m: 2,
                    boxShadow: 2,
                    borderColor: 'rgba(109, 133,12, 0.2)',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'rgba(109, 133,12)',
                    }
                }}
            >
            </DataGrid>
        </Box>
    )
}

export default TableShowEmployees


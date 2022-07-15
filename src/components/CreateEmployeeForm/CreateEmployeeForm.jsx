import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, TextField, MenuItem, Container, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import { statesList } from '../StateList/StateList';

const CreateEmployeeForm = () => {

    const departmentList = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")


    return (
        <>
            <Container>
                <Link to="/employee-list" >View Current Employees </Link>
                <h3 style={{ color: "green" }}>Personal information</h3>
                <Grid container Spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            label="Firstname"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            label="Lastname"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Grid>
                </Grid>
                </Container>
                <Container>
                <Grid container Spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                        fullWidth
                            required
                            label="Date of birth"
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        fullWidth
                            required
                            label="Start Date"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Grid>
                </Grid>
                </Container>


            <Container>
                <h3 style={{ color: "green" }}>Address</h3>
                <Grid container Spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            required
                            label="Street"
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            label="City"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            select
                            fullWidth
                            id="outlined-select"
                            label="States"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            {statesList.map((state) => (
                                <MenuItem key={state.abbreviation} value={state.name}>
                                    {state.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Zip code"
                            variant='outlined'
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </Container>


            <Container>
                <h3 style={{ color: "green" }}>Department</h3>
                <Grid container >
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            required
                            select
                            id="outlined-select"
                            label="Department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            {departmentList.map((department, index) => (

                                <MenuItem key={index} value={department}>{department}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

                <Stack spacing={2} direction="row" style={{ marginTop: "3rem" }}>
                    <Button
                        onClick="saveEmployee()"
                        variant="contained">Save</Button>
                    <Button
                        onClick="clearEmployeeForm()"
                        variant="contained">Cancel</Button>
                </Stack>

            </Container>
        </>
    )
}

export default CreateEmployeeForm

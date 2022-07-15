import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, TextField, MenuItem, Container, Grid, Paper, Typography, Button, Stack, Divider } from '@mui/material';
import { statesList } from '../StateList/StateList';
import{useSelector, useDispatch} from  'react-redux'
import { addEmployee } from '../../features/employeeSlice/employeeSlice';

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

    const dispatch = useDispatch()

    const saveEmployee = () => {
        console.log("firstname", firstName)
        console.log("lastName", lastName)
        console.log("birthDate", birthDate)
        console.log("startDate", startDate)
        console.log("street", street)
        console.log("city", city)
        console.log("state", state)
        console.log("zipCode", zipCode)
        console.log("department", department)
            const newEmployee = {
                firstName : firstName, 
                lastName : lastName, 
                birthDate : birthDate, 
                startDate : startDate, 
                street : street, 
                city: city, 
                state : state, 
                zipCode : zipCode, 
                department :department
            }
            console.log("newemployee" , newEmployee)

            alert(newEmployee.firstName )
            alert(newEmployee.lastName)

//            window.localStorage.setItem("twest", newEmployee)
            dispatch(addEmployee(newEmployee))

        
    }



    const clearEmployeeForm = () => {
        console.log("hello")
        setFirstName("")
        setLastName("")
        setBirthDate("")
        setStartDate("")
        setStreet("")
        setCity("")
        setState("")
        setZipCode("")
        setDepartment("")
    }
    const test =(e)=>{
        console.log(e.target.value)
        setFirstName(e.target.value)
        console.log("firstName", firstName)
    }
    return (
        <>
            <form onSubmit={saveEmployee}>

                <Container>
                    <h3 style={{ color: "green", marginTop: "5rem" }}>Personal information</h3>
                    <Grid container spacing={4} style={{marginBottom : "1.5em"}}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                label="Firstname"
                                value={firstName}
//                                onChange={(e) => setFirstName(e.target.value)}
        onChange={test}
/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                label="Lastname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    
                        <Grid container spacing={4} style={{marginBottom : "2em"}} >
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Date of birth"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    
                    <h3 style={{ color: "green" }}>Address</h3>
                    <Grid container spacing={2} style={{marginBottom:"1.5rem"}}>
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="Street"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                required
                                label="City"
                                value={city}
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
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                        </Grid>
                    </Grid>
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

                    <Stack spacing={2} direction="row" style={{ marginTop: "3rem" , marginBottom:"1.5rem"
                 }}>
                        <Button
                            type="submit"
                            variant="contained">Save</Button>
                        <Button
                            onClick={clearEmployeeForm}
                            variant="contained"
                            color='primary'
                            >Cancel</Button>
                    </Stack>

                    <Link to="/employee-list" >View Current Employees </Link>
                </Container>
            </form>
        </>
    )
}

export default CreateEmployeeForm

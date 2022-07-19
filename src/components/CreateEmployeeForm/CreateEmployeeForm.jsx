import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField, MenuItem, Container, Grid, Button, Stack } from '@mui/material';
import { statesList } from '../StateList/StateList';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../features/employeeSlice/employeeSlice';
import Modal from '../Modal/Modal';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

const CreateEmployeeForm = () => {

    const departmentList = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [department, setDepartment] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

    const dispatch = useDispatch()

    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department
    }
    const saveEmployee = (e) => {
        e.preventDefault()
        dispatch(addEmployee(newEmployee))
        setIsModalOpen(true)
        clearEmployeeForm()
    }
    const handelBirthDate = (value) => {
        if (value !== null) {
            const newDate = new Date(value._d)
            let birthDate = moment(newDate , moment.ISO_8601).format('DD/MM/YYYY') 
            console.log("testDate",birthDate)
            setBirthDate(birthDate)
        }
    }
    const handelStartDate = (value) => {
        if (value !== null) {
            const newDate = new Date(value._d)
            let startDate = moment(newDate , moment.ISO_8601).format('DD/MM/YYYY') 
            console.log("testDate",startDate)
            setStartDate(startDate)
        }
    }
    const clearEmployeeForm = () => {
        setFirstName("")
        setLastName("")
        setBirthDate(null)
        setStartDate(null)
        setStreet("")
        setCity("")
        setState("")
        setZipCode("")
        setDepartment("")
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <>
                <form onSubmit={saveEmployee}>
                    <Container>
                        <h3 style={{ color: "green", marginTop: "5rem" }}>Personal information</h3>
                        <Grid container spacing={4} style={{ marginBottom: "1.5em" }}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
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
                        <DatePicker
                            label="Date of birth"
                            value={birthDate}
                            onChange={handelBirthDate}
                            renderInput={(params) => <TextField {...params} />}
                        >
                        </DatePicker>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={handelStartDate}
                            renderInput={(params) => <TextField {...params} />}
                        >
                        </DatePicker>
                        <h3 style={{ color: "green" }}>Address</h3>
                        <Grid container spacing={2} style={{ marginBottom: "1.5rem" }}>
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

                        <Stack spacing={2} direction="row" style={{
                            marginTop: "3rem", marginBottom: "1.5rem"
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
                {isModalOpen ?
                    <Modal
                        content="Create employee successfully"
                        show={isModalOpen}
                        onClose={() => { setIsModalOpen(false) }}
                    />
                    : ""
                }
            </>
        </LocalizationProvider>
    )
}

export default CreateEmployeeForm
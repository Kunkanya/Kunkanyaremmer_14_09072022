import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { statesList } from '../../asset/StateList';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../features/employeeSlice/employeeSlice';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//using react lazy to reduce bundel.js size.
const Modal = React.lazy(() => import('kunkanya-modal-library-react'))

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
        //use nanoid to create id 
        id: nanoid(),
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
            setBirthDate(value.format('YYYY-MM-DD'))
        }
    }

    const handelStartDate = (value) => {
        if (value !== null) {
            setStartDate(value.format('YYYY-MM-DD'))
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
                        <Grid container paddingTop={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Grid container padding={1} direction="row"  >
                                    <Grid item sm={12} md={12} lg={12} padding={1}>
                                        <h3 style={{ color: "green" }}>Personal information</h3>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Firstname"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Lastname"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <DatePicker
                                            fullWidth

                                            label="Date of birth"
                                            value={birthDate}
                                            onChange={handelBirthDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        >
                                        </DatePicker>

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <DatePicker
                                            fullWidth
                                            label="Start Date"
                                            value={startDate}
                                            onChange={handelStartDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        >
                                        </DatePicker>

                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Grid container padding={1} direction="row" >
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <h3 style={{ color: "green" }}>Address</h3>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Street"
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="City"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
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
                                    <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="outlined-required"
                                            label="Zip code"
                                            variant='outlined'
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />

                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid container padding={1} direction="row" >
                                <Grid item xs={12} sm={12} md={12} lg={12} padding={1} >
                                    <h3 style={{ color: "green" }}>Department</h3>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} padding={1}>
                                    <TextField
                                        fullWidth
                                        required
                                        select
                                        id="outlined-select-department"
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
                        </Grid>

                        <Stack spacing={2} direction="row" justifyContent="center" style={{
                            marginTop: "1em", marginBottom: "1.5rem"
                        }}>
                            <Button
                                type="submit"
                                variant="contained">
                                    Save
                            </Button>
                            <Button
                                onClick={clearEmployeeForm}
                                variant="outlined"
                                color='primary'>
                                    Cancel
                            </Button>
                        </Stack>
                        <Link to="/employee-list" >View Current Employees </Link>

                    </Container>
                </form>


                {isModalOpen ?
                    <React.Suspense fallback='Loading'>

                        <Modal
                            show={isModalOpen}
                            onCloseFunction={() => { setIsModalOpen(false) }}
                            modalHeaderContent={"HRNet"}
                            modalBodyContent="Succesfully created new employee!!!"
                            buttonContent="Close"
                            buttonOnclickFn={() => { setIsModalOpen(false) }}
                        />

                    </React.Suspense>

                    : ""}
            </>
        </LocalizationProvider>
    )
}

export default CreateEmployeeForm
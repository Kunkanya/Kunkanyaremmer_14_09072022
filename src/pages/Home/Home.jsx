import React from 'react'
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm'
import { Link } from 'react-router-dom'
import '../../App.css'
import Header from '../../components/Header/Header'
import { Container,Box } from '@mui/system'

const CreateEmployee = () => {
    return (
        <>
            <Header />
                
            <CreateEmployeeForm />
        <div id="confirmation" className="modal">Employee Created!</div>

            </>
    )
} 

export default CreateEmployee

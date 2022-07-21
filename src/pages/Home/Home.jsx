import React from 'react'
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm'
import '../../App.css'
import Header from '../../components/Header/Header'

const CreateEmployee = () => {
    return (
        <>
            <Header text="Create Employee"/>
            <CreateEmployeeForm />
        </>
    )
}

export default CreateEmployee

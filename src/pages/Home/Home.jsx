import React from 'react'
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm'
import '../../App.css'
import Header from '../../components/Header/Header'
//import Header2 from '../../components/Header2/Header2'
const CreateEmployee = () => {
//    
    return (
        <>
            <Header text="Create Employee"/>
            <CreateEmployeeForm />
        </>
    )
}

export default CreateEmployee

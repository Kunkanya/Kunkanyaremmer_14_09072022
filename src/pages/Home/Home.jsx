import React from 'react'
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm'
import FormUserDetails from '../../components/FormUserDetail/FormUserDetails'
import FormAddress from '../../components/FormAddress/FormAddress'
import FormDepartment from '../../components/FormDepartment/FormDepartment'
import { Link } from 'react-router-dom'
import '../../App.css'

const CreateEmployee = () => {
    return (
        <>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <div class="container">
                <Link to="/employee-list" >View Current Employees </Link>
            <h2>Create Employee</h2>
            <CreateEmployeeForm />
        </div>
        <div id="confirmation" class="modal">Employee Created!</div>

            </>
    )
}

export default CreateEmployee

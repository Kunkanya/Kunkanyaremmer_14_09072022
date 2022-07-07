import React from 'react'
import FormUserDetails from '../../components/FormUserDetail/FormUserDetails'
import FormAddress from '../../components/FormAddress/FormAddress'
import FormDepartment from '../../components/FormDepartment/FormDepartment'
import '../../App.css'

const CreateEmployee = () => {
    return (
        <>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <div class="container">
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <FormUserDetails />
                <FormAddress />
                <FormDepartment />
            </form>
            <button onclick="saveEmployee()">Save</button>
        </div>
        <div id="confirmation" class="modal">Employee Created!</div>

            </>
    )
}

export default CreateEmployee

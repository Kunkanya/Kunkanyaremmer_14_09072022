import React from 'react'
import FormAddress from "../FormAddress/FormAddress";
import FormUserDetails from "../FormUserDetail/FormUserDetails";
import FormDepartment from "../FormDepartment/FormDepartment";


const CreateEmployeeForm = () => {
    return (
        <>
            <form action="#" id="create-employee">
                <FormUserDetails />
                <FormAddress />
                <FormDepartment />
            </form>
            <button onclick="saveEmployee()">Save</button>
        </>
    )
}

export default CreateEmployeeForm

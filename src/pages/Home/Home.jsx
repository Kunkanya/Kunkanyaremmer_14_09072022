import React, { Suspense, lazy } from 'react'
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm'
import '../../App.css'
const Header = lazy(() => import('../../components/Header/Header'))

const CreateEmployee = () => {


      
    return (
        <>
            <Suspense fallback="Loading ...">
                <Header text="Create Employee" />
            </Suspense>

            <CreateEmployeeForm />
        </>
    )
}

export default CreateEmployee

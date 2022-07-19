import React from 'react'
import { Link } from 'react-router-dom'
import TableShowEmployees from '../../components/TableShowEmployees/TableShowEmployees'
const EmployeeList = () => {
  return (
    <>
    <div id="employee-div" className="container">
            <h1>Current Employees</h1>
        <TableShowEmployees />
            <Link to="/">Home</Link>
        </div>
        </>
  )
}

export default EmployeeList

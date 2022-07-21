import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TableShowEmployees from '../../components/TableShowEmployees/TableShowEmployees'
import Header from '../../components/Header/Header'

const EmployeeList = () => {

  //retrieved empoyees data from the state
  const employeesList = useSelector((state)=> state.employees.employeeLists)

  return (
    <>

<Header text="Current Employees"/>
      <div id="employee-div" className="container">
            <TableShowEmployees data={employeesList} />
            <Link to="/">Home</Link>
        </div>
        </>
  )
}

export default EmployeeList

import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TableShowEmployees from '../../components/TableShowEmployees/TableShowEmployees'
const Header = React.lazy(() => import('../../components/Header/Header'))

const EmployeeList = () => {

  //retrieved empoyees data from the state
  const employeesList = useSelector((state) => state.employees.employeeLists)

  return (
    <>

      <Suspense fallback="Loading ...">
        <Header text="Current Employees" />
      </Suspense>
      <div id="employee-div" className="container">
        <TableShowEmployees data={employeesList} />
        <Link style={{marginLeft:"2rem"}} to="/">Home</Link>
      </div>
    </>
  )
}

export default EmployeeList

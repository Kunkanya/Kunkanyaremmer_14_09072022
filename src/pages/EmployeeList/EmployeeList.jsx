import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal/Modal'
const EmployeeList = () => {
  return (
    <>
    <Modal content="test test tes" />
    <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </div>
        </>
  )
}

export default EmployeeList

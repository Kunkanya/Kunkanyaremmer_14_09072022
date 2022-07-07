import React from 'react'

const FormUserDetails = () => {
  return (
    <div>
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="text" />


    </div>
  )
}

export default FormUserDetails

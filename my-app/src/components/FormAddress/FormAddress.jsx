import React from 'react'
import '../../App.css';


const FormAddress = () => {
  return (
    <fieldset class="address">
    <legend>Address</legend>

    <label for="street">Street</label>
    <input id="street" type="text" />

    <label for="city">City</label>
    <input id="city" type="text" />

    <label for="state">State</label>
    <select name="state" id="state"></select>

    <label for="zip-code">Zip Code</label>
    <input id="zip-code" type="number" />
</fieldset>
  )
}

export default FormAddress

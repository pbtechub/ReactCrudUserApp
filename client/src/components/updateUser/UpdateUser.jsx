import React from 'react'
import { useState} from 'react'
import './UpdateUser.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const UpdateUser = ({getEditId, users}) => {

const editUser = users.find((user) => user.id === getEditId)  
 

const [updateUser, setUpdateUser] = useState({
    firstName: editUser.firstName,
    lastName: editUser.lastName,
    phone: editUser.phone,
    email: editUser.email,
    city: editUser.city
  })
const [err, setErr] = useState(null)

 

 

const handleChange = (e) => {
  setUpdateUser(prev => ({ ...prev, [e.target.name]: e.target.value})) 
  }

const handleUpdateUser = async (e) => {
  e.preventDefault()
  if(updateUser.firstName === ''|| updateUser.lastName === '' || 
    updateUser.phone === '' || updateUser.email === '' ) {
    alert('Please fill all the fields')

  } else {
    try {
      await axios.patch(`http://localhost:5500/users/${getEditId}`, updateUser)
    }  catch (err) {
        setErr(err.response.data)
    } 
  }
  
}


  return (
    <div className='updateUser'>
        <div className='cancelBtn'>
            <div></div>
            <NavLink to="/">
                <button>Cancel</button>
            </NavLink>
        </div>

        <div className='updateUserForm'>
          <form>
            <input type="text" placeholder='First Name' name="firstName" 
                    onChange={handleChange} defaultValue={updateUser.firstName}/>
            <input type="text" placeholder='Last Name' name="lastName" 
                    onChange={handleChange} defaultValue={updateUser.lastName}/>
            <input type="number" placeholder='Phone Number' name="phone" 
                    onChange={handleChange} defaultValue={updateUser.phone}/>
            <input type="email" placeholder='Email Id' name="email" 
                    onChange={handleChange} defaultValue={updateUser.email}/>
            <input type="text" placeholder='City' name="city" 
                    onChange={handleChange} defaultValue={updateUser.city}/>
            {err && err}
            <NavLink to='/'>
              <button type="submit" onClick={handleUpdateUser}>Update</button>      
            </NavLink>
            
          </form>
        </div>
    </div>
  )
}

export default UpdateUser
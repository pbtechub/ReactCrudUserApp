import {React, useState} from 'react'
import './DeleteUser.scss'
import { NavLink, Link, Navigate} from 'react-router-dom'
import axios from 'axios'

const DeleteUser = ({getDeleteId, users}) => {
const deleteUser = users.find((user) => user.id === getDeleteId)  
const [err, setErr] = useState(null)
const [navigateToHome, setNavigateToHome] = useState(false)
console.log(navigateToHome);

const handleDeleteUser = async (e) => {
  e.preventDefault()
  // setNavigateToHome(true)
    try {
      await axios.delete(`http://localhost:5500/users/${getDeleteId}`)
    }  catch (err) {
        setErr(err.response.data)
    } 
  
    
  
}


if(navigateToHome) {
  return <Navigate to='/'/>
}
  return (
    <div className='deleteUser'>
      <h4>Do you want to delete following record?</h4>
      <div className='deleteRecord'>
        <h4>{deleteUser.firstName}</h4>
        <h4>{deleteUser.lastName}</h4>
        <h4>{deleteUser.phone}</h4>
        <h4>{deleteUser.email}</h4>
      </div> 
      <div className='deleteBtns'>
        <NavLink to='/'>
          <button>Cancel</button>
        </NavLink>
        <button onClick={handleDeleteUser}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteUser
import React from 'react'
import { useState} from 'react'
import './CreateUser.scss'
import axios from 'axios'
import { NavLink, Link} from 'react-router-dom'

const CreateUser = () => {

  const [createUser, setCreateUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: ''
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setCreateUser(prev => ({ ...prev, [e.target.name]: e.target.value}) )
    
  }

  const handleCreateUser = async (e) => {
    e.preventDefault()
    if(createUser.firstName === ''|| createUser.lastName === '' || 
      createUser.phone === '' || createUser.email === '' ) {
      alert('Please fill all the fields')

    } else {
      try {
        await axios.post('http://localhost:5500/users', createUser)
      }  catch (err) {
          setErr(err.response.data)
      } 
    }
  }


  return (
    <div className='createUser'>
      <div className='cancelBtn'>
            <div></div>
            <NavLink to="/">
                <button>Cancel</button>
            </NavLink>
        </div>

      <div className='createUserForm'>
        <form>
          <input type="text" placeholder='First Name' name="firstName" onChange={handleChange}/>
          <input type="text" placeholder='Last Name' name="lastName" onChange={handleChange}/>
          <input type="number" placeholder='Phone Number' name="phone" onChange={handleChange}/>
          <input type="email" placeholder='Email Id' name="email" onChange={handleChange}/>
          <input type="text" placeholder='City' name="city" onChange={handleChange}/>
          {err && err}
          <NavLink to="/">
            <button type="submit" onClick={handleCreateUser}>Add</button>      
          </NavLink>
          
        </form>
      </div>
    </div>
  )
}

export default CreateUser
import React from 'react'

import { NavLink, Link} from 'react-router-dom'

import './Home.scss'


const Home = ({handleEdit, handleDelete, users}) => {
   
  
  return (
    <div className='home'>
        <div>
            <div></div>
            <NavLink to="./createUser">
                <button>Add</button>
            </NavLink>
        </div>
        <div className="tableContainer">
            <table >
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Firtname</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Email Address</th>
                        <th>City</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length ? (
                        users.map((user, idx) => (
                            <tr key={user.id}>
                            <td>{idx + 1}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                            <td>
                            <NavLink to="./updateUser">
                                <button onClick={() => handleEdit(user.id)} className="edit">Edit</button>
                            </NavLink>
                            <span>/</span>
                            <NavLink to="./deleteUser">
                                <button onClick={() => handleDelete(user.id)} className="delete">Delete</button>
                            </NavLink>
                        </td>
                        </tr>
    
                    ))

                    ) : (<p>No users data is to be display...</p>)}
                
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
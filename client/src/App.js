import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import CreateUser from "./components/createUser/CreateUser";
import DeleteUser from "./components/deleteUser/DeleteUser";
import Home from "./components/home/Home";

import UpdateUser from "./components/updateUser/UpdateUser";


function App() {
  const [getEditId, setGetEditId] = useState(null);
  const [getDeleteId, setGetDeleteId] = useState(null);
  const [users, setUsers] = useState([]);


useEffect(() => {
    getUsers ()
  }, [])

  const getUsers = async () => {
    try {
       await axios.get('http://localhost:5500/users')
        .then((response)=> {
            const userData = response.data
            setUsers(userData)
            
        })

    } catch (err) {
        console.log((err));
    }

  }


  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home 
                    handleEdit={(id)=> setGetEditId(id)}
                    handleDelete={(id)=> setGetDeleteId(id)}
                    users={users}/>}
                    />
          <Route path='/createUser' element={<CreateUser />}/>
          <Route path='/updateUser' element={<UpdateUser 
                    getEditId={getEditId}
                    users={users}/>}
                    />
          <Route path='/deleteUser' element={<DeleteUser 
                    getDeleteId={getDeleteId}
                    users={users}/>}
                    />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

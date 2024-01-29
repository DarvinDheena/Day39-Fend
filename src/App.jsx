
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import axios from 'axios'
import config from './config'
import Resetpage from './components/Resetpage'
import ForgotPage from './components/ForgotPage'
import './main.css'

function App() {
  const [users,setUsers] = useState([]);

  const getAllUsers =  async () => {
      await axios.get(`${config.API_URL}/users`)
      .then ((users)=>{
        setUsers(users);
      })
  }

  useEffect ( ()=>{
      getAllUsers();
  },[])

  
  return (
    <div className='flex-container'>
      <BrowserRouter>
        <Link></Link>

        <Routes>
           <Route path='/' element ={<Signup users= { users } getAllUsers = { getAllUsers }/>}></Route>
          <Route path='/users' element={ <ForgotPage />}></Route>
          <Route path='/users/reset' element ={ <Resetpage />}></Route> 
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
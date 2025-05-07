 import React from 'react'
 import { Routes , Route } from 'react-router-dom'
 import Dashboard from '../pages/dashboard'
import  UserList from '../componant/user/list'
import UserAdd from '../componant/user/add'
import BusAdd from '../componant/business/add'
// import Login from '../pages/login'

 
 const Allroute = () => {
   return (
     <>
     <Routes>
        <Route  path='' element={<Dashboard/>}/>
         {/* <Route  path='/login' element={<Login/>}/>  */}
        <Route  path='/business/add' element={<BusAdd/>}/>
        <Route  path='/user/list' element={<UserList/>}/>
        <Route  path='/user/add' element={<UserAdd/>}/>
     </Routes>
       
     </>
   )
 }
 
 export default Allroute ;
import React,{useContext} from 'react';
import {UsersContext} from  './Context'
import AddUser from './components/AddUser/AddUser'
import EditForm from './components/EditForm/EditForm'
import ActiveUser from './components/ActiveUser/ActiveUser'
// import EditUserForm from './components/EditUserForm/EditUserFrom'
function App() {
  const {editing} = useContext(UsersContext)
  // console.log(editing)
  return (
    <div>
        <h1>CRUD App with hooks</h1>
        {editing?<EditForm />:<AddUser/>}
        {/* <AddUser  /> */}
        <ActiveUser />
    </div>
    
  )
}

export default App;

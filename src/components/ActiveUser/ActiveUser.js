import React,{useContext} from 'react'
import {UsersContext} from '../../Context'
// import UserList from '../UserList/UserList'
import './ActiveUser.css'
import UserCard from '../UserCard/UserCard';
function ActiveUser(){
    const {users} = useContext(UsersContext);
    return(
        <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.length>0?
        (users.map(user=>(
          <UserCard user={user} key={user.id}/>
        ))):
        (<tr>
          <td colSpan={3}>No users</td>
        </tr>)
      }
    </tbody>
  </table>
    )
}

export default ActiveUser
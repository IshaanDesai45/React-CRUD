import React,{useContext} from 'react'
import {UsersContext} from '../../Context'
import './UserCard.css'
function UserCard(props){
    const {name,username,id} = props.user;
    const {deleteUser,edit}       = useContext(UsersContext)
    return(
        <tr>
          <td>
              {name}
          </td>
          <td>
              {username}
          </td>
          <td>
              <button onClick={()=>edit(id)} className="actionBtn">Edit</button>
              <button onClick={()=>deleteUser(id)} className="actionBtn">Delete</button>
          </td>
      </tr>
    )
}

export default UserCard
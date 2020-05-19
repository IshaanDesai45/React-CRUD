import React,{useContext} from  'react'
import {UsersContext} from '../../Context'
import './AddUser.css'
function AddUser(){
    const {id,addActiveUser,name,username,handleNameChange,handleUsernameChange} = useContext(UsersContext)
    

    const handleClick = ()=>{
        const newUser = {
            id,
            name : name.trim(),
            username : username.trim()
        }
        addActiveUser(newUser)
        
    }

    return (
        <div>
            <h1>Add User</h1>
            <label >
                <p>Name</p>
                <input
                onChange={handleNameChange}
                value={name}
                className="inputElement" />
            </label>
            <label >
                <p>Username</p>
                <input
                onChange={handleUsernameChange}
                value={username} 
                className="inputElement" />
            </label>
            <button onClick={handleClick} className="formBtn">AddUser</button>
            
        </div>
    )
}

export default AddUser
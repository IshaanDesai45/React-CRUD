import React,{useState,useContext} from  'react'
import {UsersContext} from '../../Context'
function EditForm (){
    const {name,
            users,
            username,
            handleNameChange,
            handleUsernameChange,
            editId,
            handleEdit,
            handleCancel} = useContext(UsersContext)
    
    console.log(users)
    return (
        <div>
            <h1>Edit User</h1>
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
            <button onClick={()=>handleEdit(editId)} className="formBtn">Edit User</button>
            <button onClick={handleCancel}className="formBtn">Cancel</button>
            
        </div>
    )
}

export default EditForm
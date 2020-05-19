import React, { useState,createContext } from 'react'

const UsersContext = createContext();

function UsersContextProvider (props){
    const [users,setUsers] = useState([])
    const [id,setId]       = useState(0)
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [editing,setEditing] = useState(false)
    const [editId,setEditId]    = useState(0);


     function addActiveUser (newUser){
        setUsers([...users,newUser])
        setId(prenId => prenId +1)
        setName('')
        setUsername('')
        // console.log(users)
    }


    function deleteUser (id) {
        const fliteredUsers = users.filter(user => user.id !== id)
        setUsers(fliteredUsers);
        
    }
    
    function handleNameChange(event){
        setName(event.target.value)
    }


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function edit(id){
        const user = users.find(user => user.id === id)
        setEditing(true)
        setName(user.name)
        setUsername(user.username)
        setEditId(id)
    }

    const handleEdit =(editId)=>{
        const updatedusers = users.map(user =>{
            if(user.id === editId){
                const updatedUser ={
                    id:editId,
                    name,
                    username
                }
                return updatedUser;
            }
            return user
        })
        setUsers(updatedusers)
        setName('')
        setUsername('')
        setEditing(false)

    }

    const handleCancel =()=>{
        setName('')
        setUsername('')
        setEditing(false)
    }

    return(
        <UsersContext.Provider value={{id,
                                        users,
                                        addActiveUser,
                                        deleteUser,
                                        name,
                                        edit,
                                        username,
                                        setName,
                                        setUsername,
                                        handleNameChange,
                                        editing,
                                        editId,
                                        handleEdit,
                                        handleCancel,
                                        handleUsernameChange}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export {UsersContextProvider,UsersContext}
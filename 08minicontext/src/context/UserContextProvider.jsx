import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => { // prop value by default there with name children
    const [user, setUser] = React.useState(null)
    return( // giving values in an object manner
        <UserContext.Provider value={{user,setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
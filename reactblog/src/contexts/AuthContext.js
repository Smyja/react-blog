import React, { useState } from 'react'
import { authenticationService } from '../services/authenticatiion'

export const AuthContext = React.createContext(null)

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(() => {
        return authenticationService.getUser()
    })

    function logout() {
        authenticationService.logout()
        setUser(null)
    }
    
    function login(token) {
        const user = authenticationService.tokenlogin(token)
        setUser(user)
    }
    function signup(token) {
        const user = authenticationService.tokenlogin(token)
        setUser(user)
    }
    return (
        <AuthContext.Provider value={{
            logout,
            login,
            signup,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}
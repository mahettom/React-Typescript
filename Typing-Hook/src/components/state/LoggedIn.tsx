import { useState } from "react"


export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogedOut = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogedOut}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </>
    )
}
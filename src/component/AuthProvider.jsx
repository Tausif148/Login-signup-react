import { createContext } from "react";

const AuthContext = createContext(null)

const AuthProvider = (children) => {

    const [user, setUser] = useState(null);


    const signup = () => {

    }


    const login = () => {

    }


    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{ user, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
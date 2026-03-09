import { createContext } from "react";
import { useState } from "react";

import { userSignup } from '../apis/index.js';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = ({ username, email, password }) => {
        userSignup({ username, email, password });
        // console.log("AuthProvider:" + username, email, password);
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
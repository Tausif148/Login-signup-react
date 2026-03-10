import { createContext } from "react";
import { useState } from "react";

import { userSignup } from '../apis/index.js';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const signup = ({ username, email, password }) => {
        console.log(`Auth:  ${username},  ${email},  ${password}`);
        const result = userSignup({ username, email, password });

        if (result.success) {
            setError("");
        } else {
            setError(result.message);
        }
    }

    const login = ({ email, password }) => {
        console.log(`Auth:   ${email},  ${password}`);
        // const result = userSignup({ email, password });

        // if (result.success) {
        //     setError("");
        // } else {
        //     setError(result.message);
        // }
    }

    const logout = () => {

    }
    return (
        <AuthContext.Provider value={{ user, error, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
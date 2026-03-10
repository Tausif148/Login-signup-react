import { createContext } from "react";
import { useState } from "react";

import { userSignup, userLogin } from '../apis/index.js';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Signup functionality
    const signup = ({ username, email, password }) => {
        // console.log(`Auth:  ${username},  ${email},  ${password}`);
        const result = userSignup({ username, email, password });

        if (result.success) {
            setError('');
            setSuccess(result.message);
        } else {
            setSuccess('');
            setError(result.message);
        }
    }


    // Login functionality 
    const login = ({ email, password }) => {
        // console.log(`Auth:   ${email},  ${password}`);
        const result = userLogin({ email, password });

        if (result.success) {
            setError("");
            setSuccess(result.message);
        } else {
            setSuccess("");
            setError(result.message);
        }
    }


    // Logout functionality
    const logout = () => {

    }


    return (
        <AuthContext.Provider value={{ user, error, success, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
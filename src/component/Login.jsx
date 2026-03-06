import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [show, setShow] = useState(false);

    function displayPassword() {
        setShow(!show);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            placeholder="Enter Password"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 align-middle">
                        <small htmlFor="password" className="text-sm">
                            Show password
                        </small>
                        <input onClick={displayPassword} type="checkbox" name="" id="" />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Signup
                    </button>

                    <p className="text-sm text-center mt-4">
                        Don't have an account? {''}
                        <Link
                            to="/signup"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            Sigup
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login

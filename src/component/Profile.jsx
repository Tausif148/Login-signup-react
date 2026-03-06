import { Link } from "react-router-dom"

function Profile() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="border p-8 shadow-xl mb-3">
                <h1 className="text-lg">Wellcome to Your Profile Tausif</h1>
                <Link 
                    to="#"
                    className="text-blue-500 font-medium hover:underline text-center block"
                >
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Profile

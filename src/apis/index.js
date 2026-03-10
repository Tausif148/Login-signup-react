
// Signup authentication 
export const userSignup = ({ username, email, password }) => {

    if (!username || !email || !password) {
        return { success: false, message: "All fields are required" };
    }

    let users = localStorage.getItem('users') || '[]';
    users = JSON.parse(users);

    const isExist = users.find(item => item.email === email);

    if (isExist) {
        return { success: false, message: "Email already registered" };
    }

    users.push({ username, email, password });
    // Converts the array into a string because localStorage only stores strings.
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "You have resitered successfully!" };
};


// Login authentication
export const userLogin = ({ email, password }) => {
    if (!email || !password) {
        return { success: false, message: "All fields are required" };
    }

    let users = localStorage.getItem("users");

    if (!users) {
        return { success: false, message: "No users found" };
    }

    // convert string to array
    users = JSON.parse(users);

    const isExist = users.find(item => item.email === email);

    if (isExist && isExist.password === password) {
        return { success: true, message: "Login successful" };
    } else {
        return { success: false, message: "Either email or password is incorrect" };
    }
};
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
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true };
};

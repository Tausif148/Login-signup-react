const userSignup = ({ email, password }) => {
    let users = localStorage.getItem('users') || '[]';

    users = JSON.parse(users); // convert string into array or object 
}
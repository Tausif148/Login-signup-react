export const userSignup = ({ email, password }) => {
    let users = localStorage.getItem('users') || '[]';
    let isExist = false;

    users = JSON.parse(users); // convert string into array or object 

    // checking the email is exist on localstorgae and database
    isExist = users.find(item => item.email == email) ? true : false;

    if (isExist) {
        return false;
    }

    users.push({ email, password });

    localStorage.setItem('users', JSON.stringify(users));
    return true;
}


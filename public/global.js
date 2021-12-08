

let app = document.getElementsByClassName('app');
const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === form.email.value && usersList[i].password === form.password.value) {
            let currentUser = usersList[i];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }

if (window.location.href === 'http://localhost:3002/') {
    let usersList = JSON.parse(localStorage.getItem('userList'));
    let form = document.getElementById("logIn")
    
    form.addEventListener('submit', handleSubmit(e, usersList));
        

}}
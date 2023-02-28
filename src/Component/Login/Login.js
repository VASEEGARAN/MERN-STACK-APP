const loginBtn = document.getElementById('login-btn');
const loginForm = document.getElementById('login-form');
console.log(loginBtn, loginForm);

loginBtn.addEventListener('click', ()=>
{
    console.log('call from button');
})

loginForm.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const username_element = document.getElementById('username').value;
    const password_element = document.getElementById('password').value;

    console.log('call from form', username_element, password_element);
})
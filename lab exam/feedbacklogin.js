let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');
let welcome = document.querySelector('.welcome');

const logIn = async () => {
    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    let res = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    });
    
    if(!res.ok) { 
        alert('Failed to submit feedback');
        return;
    }

    let { surname } = await res.json();
    welcome.textContent = surname;
}
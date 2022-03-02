const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login-submit');

    if(submitButton) {
        submitButton.addEventListener('click', (e) =>{
            e.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringfy({
                    email: inputEmail.value,
                    password: inputPassword.value,
                })
            }).then((response) =>{
                return response.json();
            }).then((data) =>{
                console.log(data)
            })
        })  
    }
}

window.onload = init;
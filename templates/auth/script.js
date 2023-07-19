function sendData() {
    fetch(
        'https://rest-api-website.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": document.getElementById("idNome").value,
            "email": document.getElementById("idEmail").value,
            "password": document.getElementById("idSenha").value
        })
    })
    .then(response => {
        if (response.ok) {
            location.href = "../forms/forms.html";
        } else {
            throw new Error('Network Response Error!');
        }
        
        return response.json();
    })
    .then(json => {
        localStorage.setItem('accessToken', JSON.stringify(json.accessToken));
    })
    .catch(error => {
        console.log(error);
    });
}

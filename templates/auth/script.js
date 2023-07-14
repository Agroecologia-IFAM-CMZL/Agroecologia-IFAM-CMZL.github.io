function sendData() {
    let dataForm = {
        name: document.getElementById("idNome").value,
        email: document.getElementById("idEmail").value, 
        senha: document.getElementById("idSenha").value
    };

    const dataCheck = {
        name: "coordagro",
        email: "coordagro@ifam.com",
        senha: "coordagro@ifam"
    }

    if (
        dataForm.name === dataCheck.name &&
        dataForm.email === dataCheck.email &&
        dataForm.senha === dataCheck.senha
    ) {
        document.getElementById("bt-submit").onclick = function () {
            location.href = "../forms/forms.html";
        };
    }
}

// submit forms to backend
/*
document.getElementById("bt-submit").onclick = function () {
    fetch(
        'http://localhost:3030/api/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.getElementById("input-name").value,
            "email": document.getElementById("input-email").value,
            "password": document.getElementById("input-pwd").value
        })
    });

    if (response.ok) {
        location.href = "./sent-email.html";
    }
};
*/
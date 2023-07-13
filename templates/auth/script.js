async function sendData() {
    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");
    // const btEntrar = document.getElementById("idEntrar");

    const dataForm = {
        email: email.value, 
        senha: senha.value
    };

    console.log(dataForm);

    const formData = await fetch(
        "http://localhost:3030/api/user/login", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
            },
            body: dataForm,
        }).then(response => {
            if (response.status(200)) {
                window.location.href = "../forms/forms.html";

                /*btEntrar.addEventListener("click", function() {
                    var form = document.querySelector("form");  
                    
                    if (form.checkValidity()) {
                        window.location.href = "../forms/forms.html";
                    }
                });*/
            } else {
                window.location.href = "./login.html";
            }
        }).catch(function(err) {
            console.error("Error:", err);
        });

    return formData;
}

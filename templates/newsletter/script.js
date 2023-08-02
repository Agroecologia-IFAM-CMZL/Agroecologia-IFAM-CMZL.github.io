function sendEmail() {
    let address = document.getElementById("input-email").value;

    fetch(
        "https://rest-api-website.onrender.com/api/email", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin-Trial': 'admin-ifam-2023-agro',
        },
        body: JSON.stringify({
            "email": address,
        })
    })

    Email.send({
        SecureToken : "0cdc23ef-f7b1-45e8-b159-9a9a9f535417",
        To : address,
        From : "vinicius.souza5530@gmail.com",
        Subject : "Newsletter da Agroecologia",
        Body : "Testando EMAIL API",
    })
    .then(
        message => console.log(message)
    )
    .then(function () {
        location.href = "./sent-email.html";
    })
}

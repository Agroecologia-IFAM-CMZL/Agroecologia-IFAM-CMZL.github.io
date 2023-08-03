function sendEmail() {
    sendEmailDB();
    sendTemplate();
}

function sendEmailDB() {
    let address = document.getElementById("input-email").value;

    fetch(
        "https://rest-api-website.onrender.com/api/email", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": address,
        })
    });
}

function sendTemplate() {
    let address = document.getElementById("input-email").value;
    
    Email.send({
        SecureToken : "12b643dc-3585-4f59-b78d-aae35cf24124",
        To : address,
        From : "vinicius.souza5530@gmail.com",
        Subject : "Newsletter da Agroecologia",
        Body : "Testando EMAIL API pela 3@ vez!",
    })
    .then(
        message => console.log(message)
    )
    .then(function () {
        location.href = "./sent-email.html";
    });
}

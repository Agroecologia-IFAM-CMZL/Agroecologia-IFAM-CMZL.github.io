function sendEmail() {
    fetch(
        'https://rest-api-website.onrender.com/api/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin-Trial': 'admin-ifam-2023-agro',
        },
        body: JSON.stringify({
            "email": document.getElementById("input-email").value,
        })
    });

    const templateHTML = fetch(
        'https://raw.githubusercontent.com/Agroecologia-IFAM-CMZL/Agroecologia-IFAM-CMZL.github.io/main/templates/newsletter/templates.html'
    )
    .then(response => response.text())
    .then(data => {
        console.log(data);
    });
 
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "2021002252@ifam.edu.br",
        Password: "41A41D25220CB4D9DFD543FCBBDDFA4BE750",
        From: "2021002252@ifam.edu.br",
        To: document.getElementById("input-email").value,
        Subject: "Bem-Vindo a NewsLetter da Agroecologia",
        Body: templateHTML,
    }).then(function () {
        location.href = "./sent-email.html";
    });
}

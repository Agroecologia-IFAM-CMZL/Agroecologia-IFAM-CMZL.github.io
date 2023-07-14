function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "2021002252@ifam.edu.br",
        Password: "41A41D25220CB4D9DFD543FCBBDDFA4BE750",
        From: "2021002252@ifam.edu.br",
        To: document.getElementById("input-email").value,
        Subject: "Bem-Vindo a NewsLetter da Agroecologia",
        Body: "Estamos trabalhando no desenvolvimento desse recurso ..."
    }).then(function () {
        // alert({ message: "Mail sent successfully"});
        location.href = "./sent-email.html";
    });
}

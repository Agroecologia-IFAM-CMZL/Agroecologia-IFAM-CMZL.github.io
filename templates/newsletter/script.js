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
    }).then(function () {
        location.href = "./sent-email.html";
    });
}

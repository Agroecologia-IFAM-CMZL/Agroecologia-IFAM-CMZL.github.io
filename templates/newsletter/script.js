function sendEmail() {
    sentEmailTemplate();
    saveToDB();
}

function sentEmailTemplate() {
    let address = document.getElementById('input-email').value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.elasticemail.com/v2/email/send');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let params = {
        apikey: "API_KEY",
        subject: 'Bem-Vindo a Nossa Newsletter',
        from: 'vinicius.souza5530@gmail.com',
        to: address,
        template: 'template'
    };

    let body = Object.keys(params).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Email was successfully sent!");
        }
    };

    xhr.send(body);

    // check: https://elasticemail.com/developers/api-libraries/javascript#code-samples-sending-emails-send-transactional-emails
}

function saveToDB() {
    fetch(
        "https://rest-api-website.onrender.com/api/email", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin-Trial': 'admin-ifam-2023-agro',
        },
        body: JSON.stringify({
            "email": document.getElementById("input-email").value,
        })
    })
    .then(
        location.href = "./sent-email.html"
    );
}

function sendEmail() {
    // sendEmailDB();
    // sendTemplate();
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
    
    Email.send({
        SecureToken : "0520e510-b4ae-4f07-85e9-4e6200c1f95a",
        To : address,
        From : "vinicius.souza5530@gmail.com",
        Subject : "Newsletter da Agroecologia",
        Body : "Testando EMAIL API pela 3@ vez!",
    })
    .then(function() {
        message => console.log(message);
    })
    .then(
        location.href = "./sent-email.html"
    );
}

/*
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
*/

/*
function sendTemplate() {
    let address = document.getElementById("input-email").value;
    
    Email.send({
        SecureToken : "12b643dc-3585-4f59-b78d-aae35cf24124",
        To : address,
        From : "vinicius.souza5530@gmail.com",
        Subject : "Newsletter da Agroecologia",
        Body : "Testando EMAIL API pela 3@ vez!",
    })
    .then(function() {
        message => console.log(message);
    })
    .then(
        location.href = "./sent-email.html"
    );
}
*/

/*
function sendTemplate() {
    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            // event.preventDefault();

            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;

            // these IDs from the previous steps
            emailjs.sendForm('service_yizm0pj', 'template_fstefd3', '#contact-form')
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED!', error);
                })
                .then(function() {
                    location.href = "./sent-email.html";
                });
        });
    }
}
*/
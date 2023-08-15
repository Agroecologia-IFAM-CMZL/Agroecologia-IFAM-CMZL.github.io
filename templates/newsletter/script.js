function sendEmail() {
    // sendTemplate();
    // sendEmailDB();
}

function sendEmailDB() {
    fetch(
        "https://rest-api-website.onrender.com/api/email", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": document.getElementById("input-email").value,
        })
    });
}

function sendTemplate() {    
    Email.send({
        SecureToken: "fc5c7d34-dae7-44c4-9bdf-b932d28e0ca3",
        To: document.getElementById("input-email").value,
        From: "vinicius.souza5530@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    })
    .then(
        location.href = "./sent-email.html"
    );
}

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
function sentEmail() {
    sendEmailToDB();
    // sendTemplate();
}

async function sendEmailToDB() {
    await fetch(
        "http://localhost:3030/api/email/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
            "email": document.getElementById("input-email").value,
        })
    })
    .then(
        location.href = "./sent-email.html"
    );
}

async function sendTemplate() {    
    await Email.send({
        SecureToken: "fc5c7d34-dae7-44c4-9bdf-b932d28e0ca3",
        To: document.getElementById("input-email").value,
        From: "vinicius.souza5530@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    })
}

function sendEmailTest() {
    const htmlContent = "<html><body><h1>Hello World!</h1></body></html>"; // Replace with your HTML content
    const subject = "Email Subject"; // Replace with your email subject
    const recipientEmail = document.getElementById("input-email").value; // Replace with the recipient's email address
    const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(htmlContent)}`;
  
    window.location.href = emailLink;
}

var btnSubmit = document.getElementById("btnLogin");

btnSubmit.addEventListener("click", function() {
    var form = document.querySelector("form");
    
    if (form.checkValidity()) {
        window.location.href = "./sent-email.html";
    }
});
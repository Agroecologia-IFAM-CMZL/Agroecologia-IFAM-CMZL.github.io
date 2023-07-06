var btnSubmit = document.getElementById("btnSignUp");

btnSubmit.addEventListener("click", function() {
    var form = document.querySelector("form");
    
    if (form.checkValidity()) {
        window.location.href = "../forms/forms.html";
    }
});
fetch('http://localhost:8080/users/41f50e0a-290c-4759-abcb-53c5f45e5a25', {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}).then(response => {
    // Handle the JSON data
    // Get the HTML element where you want to display the response
    var responseElement = document.getElementById('test-accordion');

    var htmlContent = `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed text-bg-success p-3" 
                type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" 
                aria-expanded="false" aria-controls="collapseFour"
            >
                ${response.news[0].title}
            </button>
        </h2>

        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>${response.news[0].caption}</strong> ${response.news[0].paragraphInit} <code>code</code>, ${response.news[0].paragraphMiddle} <br>
                <a href="./news/news-exemplo03.html" class="link-success"> Saiba Mais </a>
            </div>
        </div>
    </div>
    `;

    // Set the HTML content
    responseElement.innerHTML = htmlContent;

    console.log(JSON.stringify(response));
}).catch(error => {
    // Handle any errors
    console.error('Error:', error);
});

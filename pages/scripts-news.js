// https://agro-server.onrender.com
fetch('https://my-json-server.typicode.com/CarlosViniMSouza/quakus-first-step/news', {
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
    for(var count = 0; count < response.length; count++) {
        var responseElement = document.createElement('div');

        var htmlContent = `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-bg-success p-3" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}" 
                    aria-expanded="true" aria-controls="collapse${count}"
                >
                    ${response[count].title}
                </button>
            </h2>

            <div id="collapse${count}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <h2 style="text-align: center;"><strong>${response[count].subtitle}</strong> </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tellus blandit lectus vulputate interdum a a risus. In faucibus elit sed ligula ultrices gravida. <code>code</code>,</p>
                    <p>${response[count].paragraph1}.</p>
                    <p>${response[count].paragraph2}.</p>
                    <p>${response[count].paragraph3}.</p>
                    <a href="./news/news-example.html" class="link-success"> Saiba Mais </a>
                </div>
            </div>
        </div>
        `;

        // Set the HTML content
        responseElement.innerHTML = htmlContent;

        // get inside a div
        var divAccordion = document.getElementById('accordionExample');
        divAccordion.appendChild(responseElement);
    }
}).catch(error => {
    // Handle any errors
    console.error('Error:', error);
});

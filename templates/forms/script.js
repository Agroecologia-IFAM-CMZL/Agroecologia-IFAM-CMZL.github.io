function sendData() {
    const title = document.getElementById("idTitle");
    const subtitle = document.getElementById('idSubtitle');
    const paragraphs = [
        document.getElementById('idParagraph1'), 
        document.getElementById('idParagraph2'), 
        document.getElementById('idParagraph3')
    ];

    fetch('http://localhost:3000/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            subtitle: subtitle.value,
            paragraph1: paragraphs[0].value,
            paragraph2: paragraphs[1].value,
            paragraph3: paragraphs[2].value,
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('News Sent successfully');
            } else {
                console.log('An error occurred! Error ' + response.status);
            }
        })
        .catch(error => console.error(error));
}
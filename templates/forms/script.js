let accessToken = localStorage.getItem('accessToken').replace(/['"]+/g, ""); // tirando as aspas

async function sendForms() {
    // const accessToken = localStorage.getItem('accessToken');

    await fetch('https://rest-api-website.onrender.com/api/news', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin-Trial': 'admin-ifam-2023-agro',
            'Authorization': "Bearer " + accessToken
        },
        body: JSON.stringify({
            title: document.getElementById('idTitle').value,
            subtitle: document.getElementById('idSubtitle').value,
            paragraph1: document.getElementById('idParagraph1').value,
            paragraph2: document.getElementById('idParagraph2').value,
            paragraph3: document.getElementById('idParagraph3').value,
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('News Sent successfully');
        } else {
            throw new Error('Network Response Error!');
        }
    })
    .catch(error => {
        console.log(error);
    });
}

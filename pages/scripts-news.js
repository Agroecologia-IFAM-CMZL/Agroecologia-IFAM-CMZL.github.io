fetch('news.json', {
    method: 'GET',
    headers: {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }
})
.then( response => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    
    return response.json();
})
.then(data => JSON.stringify(data))
.catch(err => console.error(`Fetch problem: ${err.message}`));

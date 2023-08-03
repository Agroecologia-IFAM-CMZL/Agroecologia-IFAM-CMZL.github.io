let client = new XMLHttpRequest();

client.open('GET', './myTemplate01.html');
client.onreadystatechange = function() {
    if (client.readyState === 4 && client.status === 200) {
        let htmlContent = client.responseText;
        return htmlContent;
    }
}

const myClient = client.response;

export default myClient;

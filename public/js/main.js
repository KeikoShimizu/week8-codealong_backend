btnTest.addEventListener('click', () => {
    const apiUrl = "http://localhost:4000";

    fetch(apiUrl + "/_Tst4936").then(responce => {
        responce.json().then(data => {
            let dataOut = "<h1>User List</h1><ul>";
            for (let i = 0; i < data.length; i++){
                dataOut+= `<li>Display Name: ${data[i].displayName}<br>
                Player Name: ${data[i].fName}${data[i].mName}. ${data[i].lName}<br>
                Email address: ${data[i].email}<br><br></li>`
            }
            dataOut += '</ul>'

            outputArea.innerHTML = dataOut;
        })
    })    
})
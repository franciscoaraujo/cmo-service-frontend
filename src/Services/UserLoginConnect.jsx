async function loginUser(credentials) {
    
    let urlConnect = 'http://localhost:8080/api/v1/CMO/login'
    
    return fetch(urlConnect, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}
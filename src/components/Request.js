export function sendRequest(method, url) {
    const headers = {
        'accept' : 'application/json', 
        'X-API-KEY' : '12c15430-9199-4e20-b554-373d3d40df43'
    }
    return fetch(url, {
        method: method,
        headers: headers,
    }).then( response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Какая-то ошибочка')
            e.data = error
            throw e
        })
    })
}
export async function sendRequest(method: string, url: string) {
    const headers = {
        'accept': 'application/json',
        'X-API-KEY': '12c15430-9199-4e20-b554-373d3d40df43'
    }
    const response = await fetch(url, {
        method: method,
        headers: headers,
    })
    if (response.ok) {
        return response.json()
    }
    const error = await response.json()
    const e = new Error('Какая-то ошибочка')
    throw e
}

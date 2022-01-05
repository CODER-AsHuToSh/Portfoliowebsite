export default class APIService {

    static InsertArticle(body) {

        return fetch('http://127.0.0.1:8000/comments/api/articles/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)

        }).then(resp => resp.json())

    }
}
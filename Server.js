const { readFile } = require('fs')
const http = require('http')

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        readFile('./Pages/Home.html', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.setHeader('Content-Type', 'text/html')
                res.end(result)
            }
        })
    } else if (req.url === '/about') {
        readFile('./Pages/About.html', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.setHeader('Content-Type', 'text/html')
                res.end(result)
            }
        })
    } else if (req.url === '/contact') {
        readFile('./Pages/Contact.html', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.setHeader('Content-Type', 'text/html')
                res.end(result)
            }
        })
    } else if (req.url === '/home') {
        res.writeHead(302, {'Location': '/'})
        res.end()
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.end(`<h1>Oops this page doesn't exist</h1>`)
    }
})

app.listen('5000', () => {
    'Server is actively listening...'
})
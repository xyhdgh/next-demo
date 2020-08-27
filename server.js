const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = parseInt(process.env.PORT, 10) || 3001

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/index', req.query)
    })

    server.get('/mine', (req, res) => {
      return app.render(req, res, '/mine', req.query)
    })

    server.get('/style', (req, res) => {
      return app.render(req, res, '/style', req.query)
    })

    server.get('/time', (req, res) => {
      return app.render(req, res, '/time', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
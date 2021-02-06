// start your server here
const server = require('./api/server.js')

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
}) 
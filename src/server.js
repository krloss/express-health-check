const http = require('http')
const express = require('express')
const {createTerminus} = require('@godaddy/terminus')

const app = express()
const server = http.createServer(app)

createTerminus(server,{
    signals:['SIGINT','SIGTERM'],
    timeout:3000,
    onSignal() {
        console.log('>>> Server is starting cleanup.')
    },
    onShutdown() {
        console.log('>>> Cleanup finished, server is shutting down')
    },
    healthChecks:{'/health':async () => {
        console.log('>>> Health Check')

        if(Date.now() % 2) console.log('Teste',teste.error)
    }}
})

server.listen(4321)

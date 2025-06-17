// // server.js
// const fs = require('fs')
// const https = require('https')
// const next = require('next')

// const app = next({ dev: true })
// const handle = app.getRequestHandler()

// const httpsOptions = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem'),
// }

// app.prepare().then(() => {
//   https.createServer(httpsOptions, (req, res) => {
//     handle(req, res)
//   }).listen(3000, () => {
//     console.log('> Server listening on https://localhost:3000')
//   })
// })

// terminal
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes


// "scripts": {
//   "dev:https": "node server.js"
// }


// ✅ Optional Step: Trust the Certificate (macOS/Linux only)
// To avoid browser warnings (Chrome, Firefox):

// Run:

// bash
// Copy
// Edit
// open /Applications/Utilities/Keychain\ Access.app
// Drag cert.pem into Keychain Access → select System keychain.

// Right-click the certificate → Get Info.

// Expand Trust → set “When using this certificate” to Always Trust.

// Restart your browser.

// 🔒 This step is optional and only for convenience.
import express = require('express')
import * as functions from 'firebase-functions'

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express()

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send({ status: 'OK' })
})

const api = functions.https.onRequest(app)
module.exports = { api }

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const server = express();

const firebase = admin
    .initializeApp(
        {
            credential: admin.credential.cert(require('../.firebase/service-account.json')),
            databaseURL: 'https://your-name-here.firebaseio.com'
        },
        'server'
    )
    .firestore();

server.use(cors());
server.use(bodyParser.json());
server.use((req, _res, next) => {
    req.firebaseServer = firebase;
    next();
});

module.exports = server;

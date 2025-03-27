const express= require('express')
const cors = require('cors')
const admin = require ('firebase-admin')
const taskroutes = require('./routes/task-routes');
const userroutes = require('./routes/user-routes');
const functions = require('firebase-functions')

const app = express();
const port = 3003;

//initialize firebase admin
const serviceAccount = require('./firebase_admin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.use(express.json())
app.use(cors());
app.use('/api',taskroutes.routes)
app.use('/api',userroutes.routes)


app.listen(port,()=>{
    console.log('server is running on port ' + port)
})

exports.app = functions.https.onRequest(app);
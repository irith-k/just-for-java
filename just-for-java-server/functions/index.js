const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
//{ origin: true }

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-api-9a206..firebaseio.com"
});
const db = admin.firestore();

app.get('/api/get-all-topic-statuses', (req, res) => {

  (async () => {  

    try {
      const topicsRef = db.collection('items').doc(req.query.id).collection('topics');
      const doc = await topicsRef.get();
      var data = {};
      doc.forEach(item => {
        data[item.id] = item.data().status;
      });
      console.log(data);
      return res.status(200).send(data);
    } catch(error) {
      console.log(error);
      return res.status(500).send(error);
    }

  })();

});

app.get('/api/get-topic-status', (req, res) => {

  (async () => {
    console.log("GET request called");

    try {
      const topicRef = db.collection('items').doc(req.query.id).collection('topics').doc(req.query.topic);
      const doc = await topicRef.get();
      return res.status(200).send(doc.data());
    } catch(error) {
      console.log(error);
      return res.status(500).send(error);
    }

  })();
    
});

app.post('/api/update-topic-status', (req, res) => {
	(async () => {
      const data = {
        status: req.body.status
      };

      try {
	      await db.collection('items').doc(req.body.id).collection('topics').doc(req.body.topic).set(data);
	      return res.status(200).send();
    	} catch (error) {
	      console.log(error);
    	  return res.status(500).send(error);
    	}
      //await db.collection('items').doc('/' + req.body.id + '/') //'/' + req.body.id + '/' + __ + '/'
            // .create({item: req.body.item});
  	})();
});

exports.app = functions.https.onRequest(app);

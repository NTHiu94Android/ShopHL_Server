const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-withnodejs-51a86-default-rtdb.firebaseio.com",
  storageBucket: 'gs://fir-withnodejs-51a86.appspot.com'
});

const db = admin.database();
const storageBucket = admin.storage();

module.exports = {db, storageBucket};

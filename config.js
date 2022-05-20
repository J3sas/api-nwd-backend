const firebase=require('firebase');

const app = firebase.initializeApp(  {
    apiKey: "AIzaSyDWcO2mzZ7iLf5IcJwLC4-XoTJVdZHCG3s",
    authDomain: "test-7b71a.firebaseapp.com",
    projectId: "test-7b71a",
    storageBucket: "test-7b71a.appspot.com",
    messagingSenderId: "724500624029",
    appId: "1:724500624029:web:e599279418aa6cb4d71a74",
    measurementId: "G-6F3X04WQMY"
  });


const db = app.fireStore();
const User = db.collection("Users"); 
module.exports = User;
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBuzCnh0CqHA6-sTTvG7HNxOgfdJkNdD0Q",

    authDomain : "my-project-vd-9c308.firebaseapp.com" ,
    databaseURL : "https://my-project-vd-9c308.firebaseio.com",
    // appId : "1: 794648379907: web: 9143c82475f3fe81" 
})

const base = Rebase.createClass(firebaseApp.database());

// this is a name export
export {firebaseApp}

// this is a default export
export default base;
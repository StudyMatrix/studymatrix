// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYlIWw28UXUTPDM1H83xDDNZg0YmX5EAg",
    authDomain: "game-a3f39.firebaseapp.com",
    databaseURL: "https://game-a3f39.firebaseio.com",
    projectId: "game-a3f39",
    storageBucket: "game-a3f39.appspot.com",
    messagingSenderId: "862558128738",
    appId: "1:862558128738:web:ee5d0057662a19c5d7df3b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var con = firebase.database().ref('users');

document.getElementById("registration").addEventListener("submit", (ev) => {
    e.preventDefault();

    var userInfo = con.push();

    userInfo.set({
        name: getId("name"),
        number: getId("number"),
        email: getId("email"),
        city: getId("city"),
        password: getId("password")
    });
    alert("sent");
    console.log("sent");
    document.getElementById("registration").reset();
});

function getId(id) {
    return document.getElementById(id).value;
}
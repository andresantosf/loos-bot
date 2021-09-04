module.exports = {
    config: async function config(){
        const firebase = require("firebase");
        const firebaseConfig = {
            apiKey: "AIzaSyA-cWgZ5TD3oBavcjexQuCG9vHcFYo7I3I",
            authDomain: "loos-ecd5c.firebaseapp.com",
            projectId: "loos-ecd5c",
            databaseURL: "https://loos-ecd5c-default-rtdb.firebaseio.com",
            storageBucket: "loos-ecd5c.appspot.com",
            messagingSenderId: "771918164483",
            appId: "1:771918164483:web:712c475a4a0db9231b5436",
            measurementId: "G-L6MQHB8GQ0"
        };
            firebase.initializeApp(firebaseConfig);
    }
}

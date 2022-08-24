importScripts("https://www.gstatic.com/firebasejs/9.8.2/firebase-app-compat.js");
importScripts(
    "https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyBlmPgz5lBXXG7SkKdzAHpFHQLlm8OrNo4",
    authDomain: "capstone-e4a5a.firebaseapp.com",
    databaseURL: "https://capstone-e4a5a-default-rtdb.firebaseio.com",
    projectId: "capstone-e4a5a",
    storageBucket: "capstone-e4a5a.appspot.com",
    messagingSenderId: "140526233510",
    appId: "1:140526233510:web:5c10f8b510c2a68b98d167"
});

const isSupported = firebase
    .messaging
    .isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({
        notification: {
            title,
            body,
            image
        }
    }) => {
        self
            .registration
            .showNotification(title, {
                body,
                icon: image || "/assets/icons/icon-72x72.png"
            });
    });
}
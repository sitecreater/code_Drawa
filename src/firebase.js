import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBTw3wrBP_A_OXJN5gjw7PmDnmuZN94uqA",
  authDomain: "capstone-pwa.firebaseapp.com",
  projectId: "capstone-pwa",
  storageBucket: "capstone-pwa.appspot.com",
  messagingSenderId: "472694429580",
  appId: "1:472694429580:web:281785b9f3b391bc77a8a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

//구글 로그인 로직
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoolgle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
const messaging = getMessaging();
//토큰값 얻기
getToken(messaging, {
  vapidKey: "BMsMhx4QL9wMNjyaJm8OOAYXsHAJZ4eEfrtplTRwG1lwx_3HL_AT7sLGv29OIjvMWhZkQd-Mv0xmlXziez4U1J8",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log("No registration token available. Request permission to generate one.");
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

//포그라운드 메시지 수신
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDYvpd_lekcGqXEMl6gNN2mMtCng2-JOPg",
  authDomain: "pwchat-9250c.firebaseapp.com",
  databaseURL: "https://pwchat-9250c.firebaseio.com",
  projectId: "pwchat-9250c",
  storageBucket: "pwchat-9250c.appspot.com",
  messagingSenderId: "846310791083",
  appId: "1:846310791083:web:dbacdc221dfd13823da4ee",
  measurementId: "G-Z2S3EZNSYN"
};

export const initializeFirebase = () => {
  try {
    firebase.initializeApp(firebaseConfig);
    askForPermissionToReceiveNotifications();
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("user token: ", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};

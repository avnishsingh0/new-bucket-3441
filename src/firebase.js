// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAVigRk0AVi954ktVE3lBvogd2CuMSisFU",
    authDomain: "registration-form-e38f0.firebaseapp.com",
    databaseURL: "https://registration-form-e38f0-default-rtdb.firebaseio.com",
    projectId: "registration-form-e38f0",
    storageBucket: "registration-form-e38f0.appspot.com",
    messagingSenderId: "563224607646",
    appId: "1:563224607646:web:343bf99fab72c70c3b748f",
    measurementId: "G-J88JP8ZQZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
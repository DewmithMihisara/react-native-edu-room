// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth , getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from  "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHEwaWrczgp47ItfKQ9jml_F5d3NPJRe4",
  authDomain: "fire-base-test-b1128.firebaseapp.com",
  projectId: "fire-base-test-b1128",
  storageBucket: "fire-base-test-b1128.appspot.com",
  messagingSenderId: "736100340065",
  appId: "1:736100340065:web:7cca46d006e79b0790b520",
  measurementId: "G-3GEYGKFSL3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{ persistence: getReactNativePersistence(ReactNativeAsyncStorage)});


// storage
export const storage = getStorage(app);
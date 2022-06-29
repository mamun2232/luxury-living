// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCRxnSgEOY92It9GXkA5lDYZ4N_7As-TyM",
//   authDomain: "luxury-living-8a704.firebaseapp.com",
//   projectId: "luxury-living-8a704",
//   storageBucket: "luxury-living-8a704.appspot.com",
//   messagingSenderId: "601688897216",
//   appId: "1:601688897216:web:66356b08a8a8c739d59f25",
//   measurementId: "G-GC6EK150HK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(analytics);
// export default auth

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWSNBQyXWp6XMB1mbHYhRu_587si2xQk4",
  authDomain: "creative-agency-cc8a0.firebaseapp.com",
  projectId: "creative-agency-cc8a0",
  storageBucket: "creative-agency-cc8a0.appspot.com",
  messagingSenderId: "317444494166",
  appId: "1:317444494166:web:58ceddc783c8882625fcf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
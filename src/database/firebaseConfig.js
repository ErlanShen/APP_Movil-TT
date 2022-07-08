import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
     apiKey: "AIzaSyBVAs4KE3xYQb2mlT3dvopwa4ha6tB7BjQ",
     authDomain: "app-movil-tt.firebaseapp.com",
     projectId: "app-movil-tt",
     storageBucket: "app-movil-tt.appspot.com",
     messagingSenderId: "1008392910140",
     appId: "1:1008392910140:web:5e3b180fd0c2c1fc429a39",
     measurementId: "G-P38QX5P1ZP"
};
// Initialize Firebase
export const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);


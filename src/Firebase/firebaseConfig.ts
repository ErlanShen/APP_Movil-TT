// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default firebase.initializeApp(config);
/* export async function loginUser(email: string, password: string) {
  
     //const email = `${email}@`
     try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password);
          console.log(response);
          return true;
     } catch (error) {
          console.log(error);
          return false;
     }
} */

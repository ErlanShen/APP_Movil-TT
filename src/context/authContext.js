
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../database/firebaseConfig";

export const authContext = createContext();

export const useAuth = () => {
     const context = useContext(authContext);
     if (!context) {
          throw new Error("useAuth must be used within an AuthProvider");
     } return context;
};

export function AuthProvider({ children }) {

     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true);
     const Base = firestore

     const registerUser = (name, email, password, carrera) => {
          /* const email = `${email}@doc.unibe.edu.ec` */
          createUserWithEmailAndPassword(auth, email, password)
               .then(usuarioFire => {
                    const myUser = usuarioFire.user;
                    const docuRef = doc(Base, `Usuarios/${myUser.uid}`);
                    return setDoc(docuRef, {
                         uid: myUser.uid,
                         email: myUser.email = email,
                         emailVerified: myUser.emailVerified,
                         displayName: myUser.displayName = name,
                         photoURL: myUser.photoURL,
                         rol: "usuario",
                         carrera: carrera.name
                    });
               });
     }

     const emailVerified = (email) => sendEmailVerification(auth, email);

     const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

     const resetPassword = (email) => sendPasswordResetEmail(auth, email)

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
               new Promise(resolve => setTimeout(resolve, 3000));
          });
          return () => unsubscribe();
     }, [])

     const logOutUser = () => { signOut(auth) }

     return <authContext.Provider
          value={{ registerUser, loginUser, logOutUser, resetPassword, emailVerified, user, loading }}>{children}</authContext.Provider>;
};
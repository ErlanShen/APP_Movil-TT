
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

     const registerUser = (name, email, password, carrera, rol) => {
          /* const email = `${email}@doc.unibe.edu.ec` */
          setUser(null);
          createUserWithEmailAndPassword(auth, email, password)
               .then(usuarioFire => {
                    const myUser = usuarioFire.user;
                    const docuRef = doc(Base, `Usuarios/${myUser.uid}`);
                    return setDoc(docuRef, {
                         uid: myUser.uid,
                         email: myUser.email,
                         emailVerified: myUser.emailVerified,
                         displayName: name,
                         photoURL: myUser.photoURL,
                         rol: rol = "usuario",
                         carrera: carrera.name
                    });
               });
     }

     const emailVerified = (email) => { sendEmailVerification(auth, email); }

     const loginUser = (email, password) => { signInWithEmailAndPassword(auth, email, password); }

     const resetPassword = (email) => { sendEmailVerification(auth, email); }

     const loginWithGoogle = async (rol) => {
          const googleProvider = new GoogleAuthProvider();
          await signInWithPopup(auth, googleProvider).then(result => {
               const myUser = result.user;
               const docuRef = doc(Base, `Usuarios/${myUser.uid}`);
               return setDoc(docuRef, {
                    uid: myUser.uid,
                    email: myUser.email,
                    emailVerified: myUser.emailVerified,
                    displayName: myUser.displayName,
                    photoURL: myUser.photoURL,
                    rol: rol = "usuario",
               });
          });
     }

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               if (!user) {
                    setUser(currentUser);
                    console.log("Usuario logeado == ", currentUser);
               } else {
                    setUser(null);
               }
               setLoading(false);
               new Promise(resolve => setTimeout(resolve, 3000));
          });

     })

     const logOutUser = () => signOut(auth)

     return <authContext.Provider
          value={{ registerUser, loginUser, logOutUser, loginWithGoogle, resetPassword, emailVerified, user, loading }}>{children}</authContext.Provider>;
};
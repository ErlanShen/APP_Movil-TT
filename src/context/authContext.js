
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../database/firebaseConfig";
//

// 
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
     const fire = firestore
     
     const registerUser = (name, email, password) =>
          createUserWithEmailAndPassword(auth, email, password)
               .then(usuarioFire => {
                    const user = usuarioFire.user;
                    const docuRef = doc(fire, `Usuarios/${user.uid}`);
                    return setDoc(docuRef, {
                         uid: user.uid,
                         email: user.email,
                         emailVerified: user.emailVerified,
                         displayName: name,
                         photoURL: user.photoURL,
                         rol: "usuario"
                    });
               });
     const sendEmail = () =>
          user.sendEmailVerification()

     const loginUser = (email, password) =>
          signInWithEmailAndPassword(auth, email, password);

     const loginWithGoogle = () => {
          const googleProvider = new GoogleAuthProvider();
          return signInWithPopup(auth, googleProvider).then(result => {
               const user = result.user;
               const docuRef = doc(fire, `Usuarios/${user.uid}`);
               return setDoc(docuRef, {
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    rol: "usuario",
               });
          });
     }
     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
          });

     })

     const logOutUser = () => signOut(auth)


     return <authContext.Provider value={{ registerUser, loginUser, logOutUser, loginWithGoogle,sendEmail, user, loading }}>{children}</authContext.Provider>;
};
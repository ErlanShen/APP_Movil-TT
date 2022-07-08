
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

     const [user, setUser] = useState("")
     const [loading, setLoading] = useState(true);
     const fire = firestore

     const registerUser = (name, email, password) =>
          createUserWithEmailAndPassword(auth, email, password)
               .then((usuarioFire) => {
                    const docuRef = doc(fire, `Usuarios/${usuarioFire.user.uid}`);
                    return setDoc(docuRef, {
                         uid: usuarioFire.user.uid,
                         email: usuarioFire.user.email,
                         emailVerified: usuarioFire.user.emailVerified,
                         displayName: name,
                         photoURL: "",
                    });
               });

     const loginUser = (email, password) =>
          signInWithEmailAndPassword(auth, email, password)

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               setLoading(false);
          });

     })

     const logOutUser = () => signOut(auth)


     return <authContext.Provider value={{ registerUser, loginUser, logOutUser, user, loading }}>{children}</authContext.Provider>;
};
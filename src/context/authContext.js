
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../Firebase/firebaseConfig";
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
     const fire = firestore
     const registerUser = (name, email, password) =>
          createUserWithEmailAndPassword(auth, email, password)
               .then((usuarioFire) => {
                    const docuRef = doc(fire, `Usuarios/${usuarioFire.user.uid}`);
                    return setDoc(docuRef, {  nombre: name, corre: email, contrasenia:password });
               });

     const loginUser = (email, password) =>
          signInWithEmailAndPassword(auth, email, password)

     useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser)
          })
     })

     const logOutUser = () => signOut(auth)


     return <authContext.Provider value={{ registerUser, loginUser, logOutUser, user }}>{children}</authContext.Provider>;
};
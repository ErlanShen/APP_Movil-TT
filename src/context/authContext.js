
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
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
     const fire = firestore
     const registerUser = (email, password) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then((usuarioFire) => {
                    const docuRef = doc(fire, `Usuarios/${usuarioFire.user.uid}`);
                    return setDoc(docuRef, { corre: email });
               });
     }

     const loginUser = (email, password) => {
          signInWithEmailAndPassword(auth, email, password);
     }

     const logOutUser = () => signOut(auth)


     return <authContext.Provider value={{ registerUser, loginUser, logOutUser }}>{children}</authContext.Provider>;
};
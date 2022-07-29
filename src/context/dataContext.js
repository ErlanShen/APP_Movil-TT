import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext } from "react";
import { firestore } from "../database/firebaseConfig";

export const dataContext = createContext()

export const useData = () => {
     const context = useContext(dataContext);
     if (!context) {
          throw new Error("useData must be used within a DataProvider");
     } return context;
};
export function dataProvider({ children }) {

     const db = firestore;

     const getDataById = async (id) => {
          const collectionDB = collection(db, 'Datos-Contenido');
          return await getDocs(collectionDB, id);
     }



     const fireStoreFunction = async () => {
          const collectionDB = collection(db, 'Datos-Contenido');
          return await getDocs(collectionDB);
     }

     /* getDataById('1').then(data => {
          return setData(data);
     }); */


     return (
          <dataContext.Provider value={{ getDataById, fireStoreFunction }}>
               {children}
          </dataContext.Provider>
     )
}
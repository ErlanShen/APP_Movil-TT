import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
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

     /* // metodo para obtener todos los datos de firebase
     const getData = async () => {
          const data = await getDocs(db, "Datos");
          return data;
     }
     // metodo para obtener un dato por id
     const getDataById = async (id) => {
          const data = await getDocs(db, "Datos", id);
          return data;
     }
     // metodo para agregar un dato
     const addData = async (data) => {
          const docRef = doc(db, "Datos");
          return setDoc(docRef, data);
     } */
     

     const getDataById = async (id) => {
          const collectionDB = collection(db, 'Datos-Contenido');
          return await getDocs(collectionDB, id);
     }

     /* getDataById('1').then(data => {
          return setData(data);
     }); */


     return (
          <dataContext.Provider value={getDataById}>
               {children}
          </dataContext.Provider>
     )
}
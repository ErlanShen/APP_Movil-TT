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

     const dataArray = [];
     const [data, setData] = useState([]);
     const [one, setOne] = useState({});
     const db = firestore;
     const fireStoreFunction = async () => {
          const collectionDB = collection(db, 'Datos-Contenido');
          return await getDocs(collectionDB);
     }
   
     const dataExtract = async () => {
          const data = await fireStoreFunction();
          data.forEach(element => {
               const fire = element.data();
               if (fire.titulo === "cuantitativo") setOne(element.data());
               dataArray.push(element.data());
          })
          setData(dataArray);
     }
     useEffect(() => {
           dataExtract();
     })
     console.log("solo uno :: ",one);
     console.log("todos:: ",data);

     
     return (
          <dataContext.Provider>
               {children}
          </dataContext.Provider>
     )
}
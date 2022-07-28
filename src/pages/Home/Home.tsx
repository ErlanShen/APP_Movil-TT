import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonToolbar, IonHeader, IonTitle, IonCard, IonCardContent, IonItem, IonButton, IonLabel, IonButtons, IonMenuButton, IonCardHeader, IonCardTitle } from '@ionic/react';
import { firestore } from '../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useData } from '../../context/dataContext';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Home: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const [getOne, setGetOne] = useState();

  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.titulo === "Enfoque") 
      dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    /* let isMounted = true; */
    dataExtract();
    /* return () => {
      isMounted = false
    } */
  }, []);
  
  let contenido = data.map((element, index) => {
    return (
      <IonCard key={index}>
        <IonCardHeader>
          <IonCardTitle>{element.titulo}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        <IonItem>
            <IonLabel id='talign'>{element.Pregunta}</IonLabel>
          </IonItem>
          <IonCardContent>
            <IonButton expand="full" color="warning" routerLink="/cuantitativo">{element.BotonCuant}</IonButton>
            <hr />
            <IonButton expand="full" color="warning" routerLink="/cualitativo">{element.BotonCual}</IonButton>
          </IonCardContent>
        </IonCardContent>
      </IonCard>  
    )
  }
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
};


export default Home;

import React, { useEffect, useState } from 'react';
import { IonContent, IonPage, IonToolbar, IonHeader, IonTitle, IonCard, IonCardContent, IonItem, IonButton, IonLabel, IonButtons, IonMenuButton, IonCardHeader } from '@ionic/react';
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
  const [one, setOne] = useState({});

  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.titulo === "Enfoque") setOne(element.data());
      dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    let isMounted = true;
    dataExtract();
    return () => {
      isMounted = false
    }
  }, []);
/* En */
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle >Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonTitle></IonTitle>
          </IonCardHeader>
          <IonItem>
            <IonLabel id='talign'>¿Cuál de los siguientes enfoques corresponde a su investigación?</IonLabel>
          </IonItem>
          <IonCardContent>
            <IonButton expand="full" color="warning" routerLink="/cuantitativo">Prioriza la medición objetiva.</IonButton>
            <hr />
            <IonButton expand="full" color="warning" routerLink="/cualitativo">Se basa en la subjetividad.</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

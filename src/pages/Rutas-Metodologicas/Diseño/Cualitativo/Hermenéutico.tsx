import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton, IonItem, IonCardSubtitle, IonButton } from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


 const Hermenéutico: React.FC = () => {
  const db = firestore;
  const fireStoreFunction = async () => {
    const collectionDB = collection(db, 'Datos-Contenido');
    return await getDocs(collectionDB);
  }
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());

  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "Fenomenologico")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  }, []);
  let contenido = data.map((element, index) => {
    return (
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <IonCardTitle id='tcenter'>{element.titulo}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
          <IonItem>
            <IonCardSubtitle>{element.pregunta}</IonCardSubtitle>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/">{element.button}</IonButton>
        </IonCardContent>
      </IonCard>
    )
  }
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Diseño</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
  /* return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Diseño</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>Hermenéutico</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
           Descripcion de Hermenéutico
           </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};

export default Hermenéutico;

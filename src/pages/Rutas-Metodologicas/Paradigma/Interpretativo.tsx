import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBackButton, IonButtons, IonItem } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Interpretativo: React.FC = () => {
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
      if (fire.id === "Interpretativo")
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
          <IonCardTitle id='tcenter'>{element.id}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
          <IonItem>
            <IonCardSubtitle>{element.pregunta}</IonCardSubtitle>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/fenomenológico" id='tbut'>{element.btnfenomeno}</IonButton>
          <IonButton expand="full" color="warning" routerLink="/hermenéutico" id='tbut'> {element.btnhermeneu}</IonButton>
          <IonButton expand="full" color="warning" routerLink="/etnográfico" id='tbut'>{element.btnetnografico}</IonButton>
          <IonButton expand="full" color="warning" routerLink="/estudiodecaso">{element.btnestudio}</IonButton>
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
}
/* return (
  <IonPage>
    <IonHeader>
      <IonToolbar id='title-toolbar'>
      <IonButtons slot="start">
        <IonBackButton />
      </IonButtons>
        <IonTitle>Paradigma</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
      <IonCardHeader>
          <IonCardTitle id='tcenter'>Interpretativo</IonCardTitle>
            <IonCardContent id='tjustify'>
              Descripcion Interpretativo
            </IonCardContent>
          <IonCardSubtitle>Especifica que quieres?</IonCardSubtitle>
      </IonCardHeader>
        
        <IonCardContent>
        <IonButton expand="full" color="warning" routerLink="/fenomenológico"  id='tbut'> Comprender el sentido y significado de un fenómeno </IonButton>
        <IonButton expand="full"  color="warning" routerLink="/hermenéutico" id='tbut'> Comprender el sentido y significado que hay mas alla de las palabras</IonButton>
        <IonButton expand="full" color="warning" routerLink="/etnográfico" id='tbut'> Comprender el comportamiento y cultura de una etnia</IonButton>
        <IonButton expand="full" color="warning" routerLink="/estudiodecaso"> Comprender un caso en particular</IonButton>
    </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
); */


export default Interpretativo;



import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBackButton, IonButtons, IonItem } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const SocioContruccionista: React.FC = () => {

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
      if (fire.id === "socioCons")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  }, []);
  const history = useHistory();
  const buttonHandler = async (event: any) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    await Storage.set({
      key: 'selectDisenio',
      value: button.id
   });
   history.push('/'+button.id);
  };
  
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
          <IonButton  color="warning" id="Narrativo" onClick={buttonHandler}>{element.btnNarrativo}</IonButton>
          <IonButton  color="warning" id="Teoría Fundamentada" onClick={buttonHandler}>{element.btnTeoriaF}</IonButton>
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
          <IonTitle>Paradigma</IonTitle>
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
      <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton />
      </IonButtons>
        <IonTitle>Paradigma</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
      <IonCardHeader>
          <IonCardTitle id='tcenter'>Socio Construccionista</IonCardTitle>
            <IonCardContent id='tjustify'>
              Descripcion Socio Construccionista
            </IonCardContent>
          <IonCardSubtitle>Especifica que quieres?</IonCardSubtitle>
      </IonCardHeader>
        <IonCardContent>
        <IonButton  color="warning" routerLink="/narrativo">Narrativo</IonButton>
        <IonButton   color="warning" routerLink="/teoriafundamentada">Teoría Fundamentada</IonButton>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
); */


export default SocioContruccionista;


import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons, IonCardSubtitle, IonItem, IonRow} from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
} 

const Experimental: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "Experimental")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  let contenido = data.map((element, index) => {
    return (
      <IonCard  key={index} class="cardComponent">
        <IonCardHeader >
          <IonCardTitle  id='tcenter'>{element.Titulo}</IonCardTitle>
          <IonCardContent  id='tjustify'>{element.Descripcion}</IonCardContent>
          <IonCardContent >
            <IonItem lines='none' >
             <IonRow>
                <IonCardSubtitle > <b>{element.Preguntad}</b></IonCardSubtitle>
                <IonCardSubtitle ></IonCardSubtitle>
              </IonRow>
            </IonItem>
          </IonCardContent>
        </IonCardHeader>
           <IonCardContent >
            <IonItem lines='none'>{element.Pregunta} </IonItem>
            <IonButton color="tertiary" routerLink="/experimentospuros">{element.btnalt}</IonButton>
            <IonButton color="tertiary" routerLink="/cuasiexperimentos">{element.btnmod} </IonButton>
            <IonButton color="tertiary" routerLink="/preexperimento">{element.btnmin}</IonButton>
          </IonCardContent>
      </IonCard>
    )}
    
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonBackButton/>
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
    <IonPage >
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
          <IonCardTitle id='buttoncenter'>Experimental </IonCardTitle>
        </IonCardHeader>
        {/* <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent> 
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle id='tcenter'> ¿Que nivel de manipulación necesitas?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent >
            <IonButton size="small" expand="full"  color="tertiary" routerLink="/experimentospuros">Alto</IonButton>
            <IonButton size="small" expand="full" color="tertiary" routerLink="/cuasiexperimentos">Moderado </IonButton>
            <IonButton size="small" expand="full" color="tertiary" routerLink="/preexperimento">Minimo</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};

export default Experimental;


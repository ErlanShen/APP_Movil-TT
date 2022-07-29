import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons, IonItem, IonCardSubtitle, IonRow} from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
} 

const Positivista: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "Positivista")
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
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <IonCardTitle id='tcenter'>{element.titulo}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
        </IonCardHeader>
          <IonCardContent >
            <IonItem>
             <IonRow>
                <IonCardSubtitle> <b>{element.preguntav}</b></IonCardSubtitle>
                <IonCardSubtitle>{element.pregunta}</IonCardSubtitle>
              </IonRow>
            </IonItem>
          </IonCardContent>
          <IonCardContent id='buttoncenter'>
            <IonButton   color="tertiary" routerLink="/experimental"> {element.btnsi}</IonButton>
            <IonButton   color="tertiary" routerLink="/no-experimental"> {element.btnno}</IonButton>
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
          <IonTitle>Paradigma</IonTitle>
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
          <IonTitle>Paradigma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Positivista </IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la información se puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent>
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle> ¿Quieres manipular variables?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent id='buttoncenter'>
            <IonButton size="small" color="tertiary" routerLink="/experimental"> Si</IonButton>
            <IonButton size="small" color="tertiary" routerLink="/no-experimental"> No</IonButton>
          </IonCardContent>
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};

export default Positivista;


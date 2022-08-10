import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons, IonItem} from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

 const Transaccional: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "DisTran")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  const buttonHandler = async (event: any) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    await Storage.set({
      key: 'selectNivel',
      value: button.id
   });
   history.push('/'+button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <IonCard  key={index} class="cardComponent">
        <IonCardHeader >
          <IonCardTitle  id='tcenter'>{element.Titulo}</IonCardTitle>
          <IonCardContent  id='tjustify'>{element.Descripcion}</IonCardContent>
        </IonCardHeader>
           <IonCardContent id='tcenter'>
            <IonItem lines='none'>
           {element.Pregunta}
           </IonItem>
           <IonButton color="tertiary" onClick={buttonHandler} id="Correlacional">{element.BtnCorr}</IonButton>
            <IonButton  color="tertiary" onClick={buttonHandler} id="Descriptivo"> {element.BtnDes}</IonButton>
            <IonButton  color="tertiary" onClick={buttonHandler} id="Exploratorio"> {element.BtnExp}</IonButton>
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
            <IonCardTitle id='tcenter'>Transaccional</IonCardTitle>
              <IonCardContent id='tjustify'>
              Las investigaciones cualitativas suelen producir preguntas antes, durante o después de la recolección y análisis de los datos.
               La acción indagatoria se mueve de manera dinámica entre los hechos y su interpretación, y resulta un proceso más bien “circular” 
               en el que la secuencia no siempre es la misma, puede variar en cada estudio.
              </IonCardContent>
          </IonCardHeader>
          
          <IonCardContent>
            <IonButton  color="warning" routerLink="/correlacional"> Correlacional</IonButton>
            <IonButton   color="warning" routerLink="/descriptivo"> Descriptivo</IonButton>
            <IonButton  color="warning" routerLink="/exploratorio"> Exploratorio</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};

export default Transaccional;


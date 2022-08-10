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

 const Longitudinal: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "DisLong")
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
      key: 'selectSubdisenio2',
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
           <IonCardContent id='tjustify' >
              <IonItem lines='none'>
                {element.Pregunta}
              </IonItem>
            <IonButton color="tertiary" onClick={buttonHandler} id="Tendencia"> {element.BtnTe} </IonButton>
            <IonButton color="tertiary" onClick={buttonHandler} id="Evolución de grupos"> {element.BtnEv} </IonButton>
            <IonButton color="tertiary" onClick={buttonHandler} id="De panel"> {element.BtnPa}   </IonButton>
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
};

export default Longitudinal;


/* import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Longitudinal: React.FC = () => {
  return (
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
            <IonCardTitle id='tcenter'>Longitudinal</IonCardTitle>
              <IonCardContent id='tjustify'>
                Desc Longitudinal
              </IonCardContent>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton  color="warning" routerLink="/tendencia" id='tbut'> Describir el comportamiento de la variable en el tiempo</IonButton>
          <IonButton   color="warning" routerLink="/evoluciondegrupo" id='tbut'> Describir el comportamiento de un grupo en el tiempo</IonButton>
          <IonButton  color="warning" routerLink="/panel" id='tbut'> Describir el comportamiento de un grupo especifico en el tiempo</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Longitudinal;

 */
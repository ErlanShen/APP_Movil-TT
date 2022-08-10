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

 const NoExperimental: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "DisNoExp")
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
      key: 'selectSubdisenio',
      value: button.id
   });
   history.push('/'+button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <IonCard  key={index} class="cardComponent">
        <IonCardHeader >
          <IonCardTitle  id='tcenter'>{element.Titulo}</IonCardTitle>
          <IonCardContent  id='tjustify'>{element.Descripción}</IonCardContent>
        </IonCardHeader>
           <IonCardContent id='tcenter'>
            <IonItem lines='none'>
           {element.Pregunta}
           </IonItem>
           <IonButton color="tertiary" onClick={buttonHandler} id="Transaccional o Transversal">{element.BtnTransacc}</IonButton>
            <IonButton color="tertiary" onClick={buttonHandler} id="Longitudinal">{element.BtnLong}</IonButton>
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
          <IonCardTitle id='buttoncenter'> No Experimental </IonCardTitle>
        </IonCardHeader>
        {/* <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent> 
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle id='tcenter'>¿En función del tiempo que necesitas?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent >
            <IonButton size="small"   color="tertiary" routerLink="/transaccional">Un tiempo y momento unico</IonButton>
            <IonButton  size='small'  color="tertiary" routerLink="/longitudinal"> Diferentes momentos en el tiempo</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};
  
export default NoExperimental;
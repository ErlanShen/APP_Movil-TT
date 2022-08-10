import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons,IonItem} from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Experimentospuros: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "experimentospuros")
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
            <IonButton  color="tertiary" id="Explicativo" onClick={buttonHandler}>{element.BtnNiv}</IonButton>   
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
          <IonCardTitle id='tcenter'>Experimentos-puros</IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent>
        <IonCardContent id='buttoncenter'>
            <IonButton  color="tertiary" routerLink="/explicativo"> Nivel</IonButton>   
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  ); */
};

export default Experimentospuros;


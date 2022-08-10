import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardContent,IonButton,IonBackButton,IonButtons, IonLabel} from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Descriptivo: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "Desc")
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
      <div className='container'> 
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <strong> {element.Titulo} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.Descripcion} </p>
              <p>{element.Pregunta}</p>
            </div>
            <div id='buttoncenter'><IonButton  className='tbut' color="tertiary" routerLink="/campo">{element.BtnFp}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbut' color="tertiary" routerLink="/documental">{element.BtnFs}</IonButton></div>
          </IonCardContent>
      </IonCard>
      </div>
    ) 
  }
    
  )

  return (
    <IonPage id='fondoUnibe'>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons  slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle><IonLabel>Rutas Metodológicas</IonLabel></IonTitle>
        </IonToolbar>
      </IonHeader>
        {contenido}
    </IonPage>
  ); 


};

export default Descriptivo; 















/* import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons, IonButton} from '@ionic/react';
 const Descriptivo: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Nivel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Descriptivo </IonCardTitle>
            <IonCardContent id='tjustify'>
              Se  encarga  de buscar  las  causas  o  motivos  por  los  cuales  ocurre  un  fenómeno, conllevando  al  entendimiento  del mismo, 
              Para ello,  se  formula  una hipótesis causal, la cual es aceptada o rechazada a partir de pruebas estadísticas.  
            </IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <IonButton  color="tertiary" routerLink="/campo">Fuentes primarias</IonButton>
          <IonButton  color="tertiary" routerLink="/documental">Fuentes secundarias</IonButton>
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Descriptivo; */


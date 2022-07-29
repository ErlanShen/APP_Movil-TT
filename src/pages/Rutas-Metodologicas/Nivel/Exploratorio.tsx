import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons, IonItem} from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Exploratorio: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "NivExp")
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
            <IonItem lines='none'  >
            {element.Pregunta}
            </IonItem>
            </IonCardHeader>
           <IonCardContent id='tcenter'>
           <IonButton  color="tertiary" routerLink="/campo">{element.BtnFp}</IonButton>
          <IonButton  color="tertiary" routerLink="/documental">{element.BtnFs}</IonButton>
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
          <IonTitle>Nivel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );    


};

export default Exploratorio;





/* import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons, IonButton} from '@ionic/react';
 const Exploratorio: React.FC = () => {
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
          <IonCardTitle id='buttoncenter'>Exploratorio </IonCardTitle>
          <IonCardContent id='tjustify'>
            Se  encarga  de buscar  las  causas  o  motivos  por  los  cuales  ocurre  un  fenómeno, conllevando  al  entendimiento  del mismo, 
            Para ello,  se  formula  una hipótesis causal, la cual es aceptada o rechazada a partir de pruebas estadísticas.  
          </IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <IonButton  color="warning" routerLink="/campo">Fuentes primarias</IonButton>
          <IonButton  color="warning" routerLink="/documental">Fuentes secundarias</IonButton>
        </IonCardContent>
       
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Exploratorio;
 */

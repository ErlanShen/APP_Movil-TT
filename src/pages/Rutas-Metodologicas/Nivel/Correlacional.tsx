import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardContent,IonButton,IonBackButton,IonButtons, IonLabel, IonContent} from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Correlacional: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "NivCorr")
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
      key: 'selectTipo',
      value: button.id
   });
   history.push('/'+button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <div className='container' key={index}> 
      <IonCard class="cardComponent">
        <IonCardHeader>
          <strong> {element.Titulo} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.Descripcion} </p>
              <p> <b> {element.pregunta} </b></p>
            </div>
            <div id='buttoncenter'><IonButton  className='tbut' color="tertiary" onClick={buttonHandler} id="De campo" >{element.BtnFp}</IonButton></div>
          </IonCardContent>
      </IonCard>
      </div>
    )
  })

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
        <IonContent>
        {contenido}
        </IonContent>
    </IonPage>
  );    

};

export default Correlacional;










/* import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons, IonButton} from '@ionic/react';
 const Correlacional: React.FC = () => {
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
          <IonCardTitle id='buttoncenter'>Correlacional </IonCardTitle>
            <IonCardContent id='tjustify'>
            Se  encarga  de buscar  las  causas  o  motivos  por  los  cuales  ocurre  un  fenómeno, conllevando  al  entendimiento  del mismo, 
            Para ello,  se  formula  una hipótesis causal, la cual es aceptada o rechazada a partir de pruebas estadísticas.  
          </IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <IonButton  color="warning" routerLink="/campo">Fuentes primarias</IonButton>
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Correlacional;
 */

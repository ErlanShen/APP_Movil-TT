import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButtons, IonImg, IonBackButton, IonLabel, IonButton, IonContent } from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const MuestraFinita: React.FC = () => {
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "MuestraFinita")
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
      <div className='container' key={index}> 
          <IonCard>
        <IonCardHeader>
          <strong> {element.titulo} </strong>
        </IonCardHeader>
              <IonCardContent >
              <IonImg class='imagengrande' src={element.url}></IonImg>
              <div className='card'>
              <p> {element.descripcion.descrip}</p>
              <p> {element.descripcion.c1}</p>
              <p> {element.descripcion.c2}</p>
              <p> {element.descripcion.c3}</p>
              </div>
              <div id='buttoncenter'><IonButton  className='tbut' color="tertiary" routerLink="/Tecnica">{element.BtnFin}</IonButton></div>
              </IonCardContent>
          </IonCard>
      </div>
  )})
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
}
export default MuestraFinita;


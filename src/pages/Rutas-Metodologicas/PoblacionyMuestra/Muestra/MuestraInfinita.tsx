import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonBackButton, IonButtons, IonImg, IonLabel, IonButton, IonContent } from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}
const MuestraInfinita: React.FC = () => {
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "MuestraInfinita")
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
      <div className='container' key={index} >
        <IonCard>
          <IonCardHeader>
            <strong> {element.titulo} </strong>
          </IonCardHeader>
          <IonCardContent>
            <IonImg class='imagengrande' src={element.url}></IonImg>
            <div className='card'>
              <p> {element.descripcion}</p>
            </div>
            <div id='buttoncenter'><IonButton className='tbut' color="tertiary" routerLink="/Tecnica">{element.BtnFin}</IonButton></div>
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
          <IonButtons slot="start">
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
export default MuestraInfinita;


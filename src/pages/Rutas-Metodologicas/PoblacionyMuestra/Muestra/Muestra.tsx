import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBackButton, IonButtons, IonCardSubtitle, IonItem } from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}
const Muestra: React.FC = () => {
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "Muestra")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  }, []);

  let contenido = data.map((element, index) => {
    return (
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <IonCardTitle id='tcenter'>{element.id}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
          <IonItem>
            <IonCardSubtitle>{element.pregunta}</IonCardSubtitle>
          </IonItem>
        </IonCardHeader>
          <IonCardContent id='buttoncenter'>
            <IonButton color="tertiary" routerLink="/positivista">{element.bt}</IonButton>
          </IonCardContent>
      </IonCard>
    )}

  )
  return (
    <IonPage id='fondoUnibe'>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
}
/*   return (
    <IonPage >
      <IonHeader>
        <IonToolbar id='title-toolbar'>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle >Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Cuantitivo </IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Carácter objetivo, debido a que el investigador observa, mide y manipula variables; 
          desprendiéndose de sus propias creencias,siendo la relación entre éste y el fenómeno de estudio, 
          independiente, es decir, lo que no puede medirse u observarse con precisión se descarta como “objeto” de estudio.
        </IonCardContent>
        <IonCardContent>
            <IonCardContent id='buttoncenter'>
            <IonButton color="tertiary" routerLink="/positivista"> Paradigma</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}; */

export default Muestra;


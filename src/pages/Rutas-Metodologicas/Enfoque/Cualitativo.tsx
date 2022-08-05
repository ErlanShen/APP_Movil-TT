import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBackButton, IonButtons, IonItem, IonText, IonCardSubtitle, IonMenuButton } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


const Cualitativo: React.FC = () => {
  const db = firestore;
  const fireStoreFunction = async () => {
    const collectionDB = collection(db, 'Datos-Contenido');
    return await getDocs(collectionDB);
  }
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());

  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.titula === "Cualitativo")
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
          <IonCardTitle id='tcenter'>{element.titula}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
          <IonItem>
            <IonCardSubtitle>{element.subtitulo}</IonCardSubtitle>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>
          <IonButton color="warning" routerLink="/interpretativo">{element.btinterpretativo}</IonButton>
          <IonButton color="warning" routerLink="/sociocrítico">{element.btsociocritico}</IonButton>
          <IonButton color="warning" routerLink="/socio-construccionista">{element.btsocioconstr}</IonButton>
        </IonCardContent>
      </IonCard>
    )
  }
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle >Rutas Metodológicas</IonTitle>
          {/* <IonButtons slot="start">
           <IonBackButton />
         </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
}
/*  return (
   <IonPage>
     <IonHeader>
       <IonToolbar id='title-toolbar'>
         <IonButtons slot="start">
           <IonBackButton />
         </IonButtons>
         <IonTitle>Enfoque</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent>
       <IonCard>
         <IonCardHeader>
           <IonCardTitle id='tcenter'>Cualitativo</IonCardTitle>
           <IonCardContent id='tjustify'>
             Las investigaciones cualitativas suelen producir preguntas antes, durante o después de la recolección y análisis de los datos.
             La acción indagatoria se mueve de manera dinámica entre los hechos y su interpretación, y resulta un proceso más bien “circular”
             en el que la secuencia no siempre es la misma, puede variar en cada estudio.
           </IonCardContent>
           <IonCardSubtitle>Elija el tipo de realidad</IonCardSubtitle>
         </IonCardHeader>

         <IonCardContent>
           <IonButton  color="warning" routerLink="/sociocrítico"> ¿Quieres transformar la realidad?</IonButton>
           <IonButton  color="warning" routerLink="/interpretativo"> ¿Quieres interpretar la realidad?</IonButton>
           <IonButton  color="warning" routerLink="/socio-construccionista"> ¿Quieres reconstruir la realidad?</IonButton>
         </IonCardContent>
       </IonCard>
     </IonContent>
   </IonPage>
 );
}; */

export default Cualitativo;


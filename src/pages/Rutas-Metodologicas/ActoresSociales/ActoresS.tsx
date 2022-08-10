import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent,  IonButtons, IonBackButton, IonButton, IonLabel, IonContent } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../database/firebaseConfig';

 const ActoresSociales: React.FC = () => {
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
      if (fire.id === "ActoresSociales")
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
          <strong> {element.titulo} </strong>
        </IonCardHeader>
        <IonCardContent>
          <div className='card'>
          <p>{element.descripcion}</p>
            <p>{element.pregunta}</p>

          </div>
          <div id='buttoncenter'><IonButton className='tbut' color="warning" routerLink="/Tecnica de Recoleccion de información">{element.btnfin}</IonButton></div>
         
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
        <IonContent>
        {contenido}
        </IonContent>
    </IonPage>
  );
}
 
export default ActoresSociales;

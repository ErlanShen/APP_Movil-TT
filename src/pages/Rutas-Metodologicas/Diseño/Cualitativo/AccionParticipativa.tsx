import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent,  IonButtons, IonBackButton, IonButton, IonLabel } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../../database/firebaseConfig';


 const AccionParticipativa: React.FC = () => {
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
      if (fire.id === "accionParticipativa")
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
          <strong>Diseño: {element.titulo} </strong>
        </IonCardHeader>
        <IonCardContent>
          <div className='card'>
          <p>{element.descripcion}</p>
            <p>{element.pregunta}</p>

          </div>
          <div id='buttoncenter'><IonButton className='tbut' color="warning" routerLink="/home">{element.button}</IonButton></div>
         
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
}
 
export default AccionParticipativa;

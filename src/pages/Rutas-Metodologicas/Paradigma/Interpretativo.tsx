import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Interpretativo: React.FC = () => {
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
      if (fire.id === "Interpretativo")
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
              <p> {element.descripcion} </p>

              <p>{element.pregunta}</p>
            </div>
            <div id='buttoncenter'><IonButton  className='tbutl' color="warning" routerLink="/fenomenológico" id='tbut'>{element.btnfenomeno}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbutl' color="warning" routerLink="/hermenéutico" id='tbut'> {element.btnhermeneu}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbutl' color="warning" routerLink="/etnográfico" id='tbut'>{element.btnetnografico}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbutl' color="warning" routerLink="/estudiodecaso" id='tbut'>{element.btnestudio}</IonButton></div>
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
export default Interpretativo;


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
      <div className='container'> 
          <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <strong> {element.titulo} </strong>
        </IonCardHeader>
              <IonCardContent >
              <div className='card'>
              <p> {element.descripcion}</p>
              </div>
              <IonImg class='imagengrande' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/Formulas%20muestra%20finitas.png?alt=media&token=ec75e77e-b79f-497a-a1da-33b129467976"></IonImg>
              <div id='buttoncenter'><IonButton  className='tbut' color="tertiary" routerLink="/Tecnica">{element.BtnFin}</IonButton></div>
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
export default MuestraFinita;


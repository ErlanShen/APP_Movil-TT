import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel, IonContent } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}
const PobyMuest: React.FC = () => {
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "PobyMuest")
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
      key: 'selectPyM',
      value: button.id
    });
    history.push('/' + button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <div className='container' key={index}>
        <IonCard class="cardComponent">
          <IonCardHeader>
            <strong> {element.titulo} </strong>
          </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.descripcion}</p>
                <p> <b> {element.pregunta} </b></p>
            </div>
            <div id='buttoncenter'><IonButton color="tertiary" onClick={buttonHandler} id="Muestra Finita">{element.btnmf}</IonButton></div>
            <div id='buttoncenter'><IonButton color="tertiary" onClick={buttonHandler} id="Muestra Infinita">{element.btnmi}</IonButton></div>
          </IonCardContent>
        </IonCard>
      </div>
    )}
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
export default PobyMuest;


import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel, IonContent, IonIcon } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';
import { backspaceOutline, backspaceSharp } from 'ionicons/icons';

const Cuantitativo: React.FC = () => {
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
      if (fire.id === "Cuantitativo")
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
      key: 'selectParadigma',
      value: button.id
    });
    history.push('/' + button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <div className='container' key={index}>
        <IonCard class="cardComponent">
          <IonCardHeader>
            <strong>Enfoque: {element.titulo}</strong>
          </IonCardHeader>
          <IonCardContent>
            <div className='card'>
              <p> {element.descripcion} </p>
              <p> <b> {element.pregunta} </b></p>
            </div>
            <div id='buttoncenter'>
              <IonButton color="tertiary" id="Positivista" onClick={buttonHandler}>{element.bt}</IonButton>
            </div>
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
          <IonBackButton>
              <IonIcon icon={backspaceOutline || backspaceSharp} size='large' color='light' />
            </IonBackButton>
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


export default Cuantitativo;


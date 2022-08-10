
import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const SocioContruccionista: React.FC = () => {

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
      if (fire.id === "socioCons")
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
      key: 'selectDisenio',
      value: button.id
   });
   history.push('/'+button.id);
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
              <p> {element.descripcion} </p>
              <p>{element.pregunta}</p>
            </div>
            <div id='buttoncenter'>
              <IonButton  color="warning" id="Narrativo" onClick={buttonHandler}>{element.btnNarrativo}</IonButton>
            </div>
            <div id='buttoncenter'>
              <IonButton  color="warning" id="Teoría Fundamentada" onClick={buttonHandler}>{element.btnTeoriaF}</IonButton>
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


export default SocioContruccionista;


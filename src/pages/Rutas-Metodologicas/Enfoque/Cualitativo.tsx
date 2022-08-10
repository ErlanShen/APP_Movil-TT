import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel, IonContent } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

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
  const history = useHistory();
  const buttonHandler = async (event: any) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    await Storage.set({
      key: 'selectParadigma',
      value: button.id
   });
   history.push('/'+button.id);

  };
  useEffect(() => {
    dataExtract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let contenido = data.map((element, index) => {
    return (
      <div className='container' key={index}>
      <IonCard class="cardComponent">
        <IonCardHeader>
          <strong>Enfoque: {element.titula} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.descripcion} </p>

              <p>{element.subtitulo}</p>
            </div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" onClick={buttonHandler} id='Interpretativo'>{element.btsociocritico}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" onClick={buttonHandler} id='Sociocrítico'>{element.btinterpretativo}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" onClick={buttonHandler} id='Socio-construccionista'>{element.btsocioconstr}</IonButton></div>
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
export default Cualitativo;
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonBackButton, IonButtons, IonItem, IonText, IonCardSubtitle, IonMenuButton } from '@ionic/react';
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
          <IonButton color="warning" onClick={buttonHandler} id='interpretativo'>{element.btinterpretativo}</IonButton>
          <IonButton color="warning" onClick={buttonHandler} id='sociocrítico'>{element.btsociocritico}</IonButton>
          <IonButton color="warning" onClick={buttonHandler} id='socio-construccionista'>{element.btsocioconstr}</IonButton>
        </IonCardContent>
      </IonCard>
    )
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle >Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
}
export default Cualitativo;
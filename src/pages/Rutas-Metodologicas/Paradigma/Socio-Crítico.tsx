import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton, IonCardSubtitle, IonItem, IonButton } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

 const SocioCritico: React.FC = () => {
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
      if (fire.id === "socioCrit")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
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
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <IonCardTitle id='tcenter'>{element.titulo}</IonCardTitle>
          <IonCardContent id='tjustify'>{element.descripcion}</IonCardContent>
          <IonItem>
            <IonCardSubtitle>{element.pregunta}</IonCardSubtitle>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>
          <IonButton  color="warning" id="Investigación acción participativa" onClick={buttonHandler}>{element.btnDisenio}</IonButton>
        </IonCardContent>
      </IonCard>
    )
  }
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Paradigma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
}
  /* return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Paradigma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>Socio Critico</IonCardTitle>
            <IonCardContent>
            Descripcion Socio-Critico 
          </IonCardContent>

            <IonCardTitle id='tcenter'> Diseño  </IonCardTitle>
            <IonCardSubtitle>Investigación Acción Participativa  </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
            Comprende un proceso de intervención directa en el contexto de estudio, donde se busca resolver las problemáticas
           que surgen desde la voz de los actores sociales y procurando el aprovechamiento de las bondades que estos tienen;
           ya que en esencia se direcciona a la trasformación y emancipación.
          </IonCardContent>
        </IonCard>

        
      </IonContent>
    </IonPage>
  ); */

export default SocioCritico;

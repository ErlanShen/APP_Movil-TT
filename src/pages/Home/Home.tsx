import React, { useEffect, useState } from 'react';
import { IonPage, IonToolbar, IonHeader, IonTitle, IonCard, IonCardContent, IonButton, IonLabel, IonButtons, IonCardHeader, IonBackButton, IonContent } from '@ionic/react';
import { firestore } from '../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
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
      if (fire.id === "Enfoque")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //metodo para almacenar el id del contenido seleccionado
  const history = useHistory();
  const buttonHandler = async (event: any) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    await Storage.set({
      key: 'select-enfoque',
      value: button.id
    });

    history.push('/' + button.id);
  };

  let contenido = data.map((element, index) => {
    return (
      <div className='container' key={index} >
        <IonCard class="cardComponent">
          <IonCardHeader>
            <strong> {element.titulo} </strong>
          </IonCardHeader>
          <IonCardContent>
            <div className='card'>
              <p> {element.descripcion} </p>
              <p>{element.Pregunta}</p>
            </div>
            <div id='buttoncenter'><IonButton className='tbut' id='Cuantitativo' color="warning" onClick={buttonHandler} >{element.BotonCuant}</IonButton></div>
            <div id='buttoncenter'><IonButton className='tbut' id='Cualitativo' color="warning" onClick={buttonHandler} >{element.BotonCual}</IonButton></div>
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
            <IonMenuButton />
          </IonButtons>
          <IonTitle><IonLabel>Rutas Metodológicas</IonLabel></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
        </IonContent>
    </IonPage>
  );
};

export default Home;

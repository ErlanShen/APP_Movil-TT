import React, { useEffect, useState } from 'react';
import { IonPage, IonCard, IonCardContent, IonButton, IonCardHeader, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import { firestore } from '../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';
import Header from '../../components/header';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Home: React.FC = () => {

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
        <IonCard key={index} class="cardComponent">
          <IonCardHeader>
            <strong> {element.titulo} </strong>
          </IonCardHeader>
          <IonCardContent>
            <div className='card'>
              <p>{element.Pregunta}</p>
            </div>
            <div id='buttoncenter'><IonButton id='Cuantitativo' onClick={buttonHandler} className='tbut' color="warning">{element.BotonCuant}</IonButton></div>
            <div id='buttoncenter'><IonButton id='Cualitativo' onClick={buttonHandler} className='tbut' color="warning">{element.BotonCual}</IonButton></div>
          </IonCardContent>
        </IonCard>
    )
  }
  )
  return (
    <IonPage id='fondoUnibe'>
      <IonHeader >
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='container' >
        {contenido}
      </div>
    </IonPage>
  );
};
export default Home;
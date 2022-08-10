import React, { useEffect, useState } from 'react';
import { IonPage, IonCard, IonCardContent, IonItem, IonButton, IonLabel, IonButtons, IonCardHeader, IonCardTitle, IonBackButton } from '@ionic/react';
import { firestore } from '../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';
import Header from '../../components/header';

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
      if (fire.titulo === "Enfoque")
        dataArray.push(element.data());
    })
    setData(dataArray);
  };
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

  let contenido = data.map((element) => {
    return (
      <div className='container' key={element.id}>
        <IonCard class="cardComponent">
          <IonCardHeader>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonCardTitle>{element.titulo}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel id='talign'>{element.Pregunta}</IonLabel>
            </IonItem>
            <IonCardContent>
              <IonButton id='Cuantitativo' color="warning" onClick={buttonHandler} >{element.BotonCuant}</IonButton>
              <hr />
              <IonButton id='Cualitativo' color="warning" onClick={buttonHandler} >{element.BotonCual}</IonButton>
            </IonCardContent>
          </IonCardContent>
        </IonCard>
      </div>
    )
  }
  )
  return (
    <IonPage id='fondoLogo'>
      <Header />
      {contenido}
    </IonPage>
  );
};

export default Home;

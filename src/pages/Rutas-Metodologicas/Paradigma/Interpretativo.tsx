import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const Interpretativo: React.FC = () => {
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
      if (fire.id === "Interpretativo")
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
      <div className='container' key={index}> 
      <IonCard class="cardComponent">
        <IonCardHeader>
          <strong> {element.Titulo} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.descripcion} </p>

              <p>{element.pregunta}</p>
            </div>
            <div id='buttoncenter'>
              <IonButton  className='tbutl' color="warning" id="Fenomenológico" onClick={buttonHandler}>{element.btnfenomeno}</IonButton>
            </div>
            <div id='buttoncenter'>
              <IonButton  className='tbutl' color="warning" id="Hermenéutico" onClick={buttonHandler}> {element.btnhermeneu}</IonButton>
            </div>
            <div id='buttoncenter'>
              <IonButton  className='tbutl' color="warning" id="Etnográfico" onClick={buttonHandler}>{element.btnetnografico}</IonButton>
            </div>
            <div id='buttoncenter'>
              <IonButton  className='tbutl' color="warning" id="Estudio de caso" onClick={buttonHandler}>{element.btnestudio}</IonButton>
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
export default Interpretativo;


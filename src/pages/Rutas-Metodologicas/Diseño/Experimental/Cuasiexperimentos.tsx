import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardContent,IonButton,IonBackButton,IonButtons, IonLabel} from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useHistory } from 'react-router';
import { Storage } from '@capacitor/storage';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

const Cuasiexperimentos: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "CuasiExperimentos")
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
      key: 'selectNivel',
      value: button.id
   });
   history.push('/'+button.id);
  };

  let contenido = data.map((element, index) => {
   
  
    return (
      <div className='container' key={index}>
        <IonCard class="cardComponent">
        <IonCardHeader>
          <strong>Diseño: {element.Titulo} </strong>
        </IonCardHeader>
        <IonCardContent>
          <div className='card'>
            <p>{element.Descripcion}</p>
            <p> <b>{element.Pregunta}</b></p>
          </div>
          <div id='buttoncenter'><IonButton  color="tertiary" id="Explicativo" onClick={buttonHandler}>{element.BtnNiv}</IonButton>
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
};

export default Cuasiexperimentos;


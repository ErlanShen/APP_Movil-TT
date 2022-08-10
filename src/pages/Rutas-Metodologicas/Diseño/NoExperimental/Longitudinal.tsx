import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardContent,IonButton,IonBackButton,IonButtons, IonLabel} from '@ionic/react';
import { firestore } from '../../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const db = firestore;
const fireStoreFunction = async () => {
  const collectionDB = collection(db, 'Datos-Contenido');
  return await getDocs(collectionDB);
}

 const Longitudinal: React.FC = () => {

  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "DisLong")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let contenido = data.map((element, index) => {
    return (
      <div className='container'> 
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <strong> {element.Titulo} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.Descripcion} </p>
              <p>{element.Pregunta}</p>
            </div>
            <div id='buttoncenter'><IonButton  id='tbutl' color="tertiary" routerLink="/tendencia" > {element.BtnTe} </IonButton></div>
            <div id='buttoncenter'><IonButton  id='tbutl'  color="tertiary" routerLink="/evoluciondegrupo" > {element.BtnEv} </IonButton></div>
            <div id='buttoncenter'><IonButton  id='tbutl'  color="tertiary" routerLink="/panel" > {element.BtnPa} </IonButton></div>
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

export default Longitudinal;

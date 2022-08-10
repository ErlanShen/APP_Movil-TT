import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonBackButton, IonButtons, IonLabel } from '@ionic/react';
import { firestore } from '../../../database/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


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
  useEffect(() => {
    dataExtract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let contenido = data.map((element, index) => {
    return (
      <div className='container'> 
      <IonCard key={index} class="cardComponent">
        <IonCardHeader>
          <strong> {element.titula} </strong>
        </IonCardHeader>
          <IonCardContent >
            <div className='card'>
              <p> {element.descripcion} </p>

              <p>{element.subtitulo}</p>
            </div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" routerLink="/sociocrítico">{element.btsociocritico}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" routerLink="/interpretativo">{element.btinterpretativo}</IonButton></div>
            <div id='buttoncenter'><IonButton  className='tbut' color="warning" routerLink="/socio-construccionista">{element.btsocioconstr}</IonButton></div>
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
export default Cualitativo;


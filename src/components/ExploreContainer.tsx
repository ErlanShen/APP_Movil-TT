import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonImg, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../database/firebaseConfig';
import './ExploreContainer.css';
import { arrowForwardOutline, menuOutline, menuSharp } from 'ionicons/icons';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const ExploreContainer: React.FC = () => {
  const db = firestore;
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  // metodo para obtener los datos de firebase por id
  const fireStoreFunction = async () => {
    const collectionDB = collection(db, 'Datos-Contenido');
    return await getDocs(collectionDB);
  }
  // metodo para obtener los datos de firebase por id
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "ExploreContainer")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    dataExtract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [busy, setBusy] = useState(false);
  const history = useHistory();
  const clearState = async (e: any) => {
    e.preventDefault();
    setBusy(true);
    await Storage.clear();
    setTimeout(() => {
      setBusy(false);
      ; history.push('/home');
    }, 1800);

  }
  <IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
  let contenido = data.map((element, index) => {
    return (

      <div className="container" key={index}>
        <IonCard class="cardComponent">
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <strong>{element.saludo}</strong>
          </IonCardHeader>
          <IonCardContent >
            <div className='cart'>
              <p>{element.parrafo1}</p>
              <p>{element.parrafo2} <IonIcon icon={menuOutline || menuSharp} color='dark' />  </p>
            </div>
            <div id='buttoncenter'>
              <IonButton onClick={clearState}>
                <IonIcon icon={arrowForwardOutline} size="large" slot="start" color='light' />{element.button}
              </IonButton>
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
          <IonButtons slot="start">
            <IonMenuButton >
              <IonIcon icon={menuOutline || menuSharp} size='large' color='light' />
            </IonMenuButton>
          </IonButtons>
          <IonTitle>Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
};
export default ExploreContainer;

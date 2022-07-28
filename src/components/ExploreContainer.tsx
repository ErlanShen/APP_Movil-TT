import { IonApp, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../database/firebaseConfig';
import './ExploreContainer.css';
import { arrowForwardOutline } from 'ionicons/icons';
import Header from './header';

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
  }, []);

  let contenido = data.map((element, index) => {
    return (
      <div className="container">
        <IonCard key={index} class="cardComponent">
          <strong>{element.saludo}</strong>
          <hr />
          <p>{element.parrafo1}</p>
          <hr />
          <p>{element.parrafo2}</p>
          <hr />
          <IonButton routerLink='/home/'>
            <IonIcon icon={arrowForwardOutline} size="large" slot="start" color='light' />{element.button}</IonButton>
        </IonCard> 
      </div>
    )
  }
  )
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton color='medium'/>
          </IonButtons>
          <IonTitle>Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
};

/*  return (
   <IonPage>
     <IonHeader >
       <IonToolbar id='title-toolbar'>
         <IonButtons slot="start">
           <IonMenuButton />
         </IonButtons>
         <IonTitle size="large">Rutas Metodológicas</IonTitle>
       </IonToolbar>
     </IonHeader>
     <div className="container">
       <IonCard>
         <strong>Bienvenidos</strong>
         <hr />
         <p>Esta aplicación te ayuda a crear tu ruta metodológica para el desarrollo de trabajos de investigación</p>
         <hr />
         <p>Para empezar, selecciona una opción del menú</p>
         <hr />
         <IonButton routerLink='/home/'>
           <IonIcon icon={arrowForwardOutline} size="large" slot="start" color='light' />
           Empecemos</IonButton>
       </IonCard>
     </div>
   </IonPage>

 ); */


export default ExploreContainer;

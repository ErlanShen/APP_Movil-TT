import React, { useEffect, useState } from 'react';
import { IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButtons, IonBackButton, IonButton, IonLabel, IonContent, IonItem, IonSelect, IonSelectOption, useIonToast } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../database/firebaseConfig';
import { Storage } from '@capacitor/storage';
import { useHistory } from 'react-router';

const sujetos = [
  { name: "Actores Sociales" },
  { name: "Informantes Claves" },
  { name: "Versionantes" },
];

const ActoresSociales: React.FC = () => {

  const db = firestore;
  const fireStoreFunction = async () => {
    const collectionDB = collection(db, 'Datos-Contenido');
    return await getDocs(collectionDB);
  }
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const [selectedSujeto, setSelectedSujeto] = useState('');

  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.id === "ActoresSociales")
        dataArray.push(element.data());
    })
    setData(dataArray);
  }

  useEffect(() => {
    dataExtract();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectHandler = async (event: any) => {
    event.preventDefault();
    
    history.push('/Tecnica de Recoleccion de información');
  }; 

  const history = useHistory();
  const buttonHandler = async (event: any) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    await Storage.set({
      key: 'selectSujetosI',
      value: button.id
    });
    history.push('/Tecnica de Recoleccion de información');
  };

  /* const [present, dismiss] = useIonToast();
  const toast = (message: string, color?: string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss() }],
    message: message,
    duration: 2500,
    position: 'bottom',
    color: color ? color : 'danger',
    animated: true,
  }) */

  let contenido = data.map((element, index) => {
    return (

      <div className='container' key={index}>
        <IonCard class="cardComponent">
          <IonCardHeader>
            <strong> {element.titulo} </strong>
          </IonCardHeader>
          <IonCardContent>
            <div className='card' onSubmit={selectHandler}>
              <p>{element.descripcion}</p>
              <p>{element.pregunta}</p>
              {/* <IonItem >
                <p className='card'>Seleccione el sujeto de estudio</p>
                <IonSelect onIonChange={(event: any) => setSelectedSujeto(event.target.value)}>
                  {sujetos.map(sujeto => (
                    <IonSelectOption key={sujeto.name} value={sujeto}>{sujeto.name}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem> */}
            </div>
            <div id='buttoncenter' ><IonButton className='tbut' color="warning" id='Actores Sociales/ Informantes Claves/ Versionantes' onClick={buttonHandler}>{element.btnfin}</IonButton></div>


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
            <IonBackButton />
          </IonButtons>
          <IonTitle><IonLabel>Rutas Metodológicas</IonLabel></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {contenido}
      </IonContent>
    </IonPage>
  );
}

export default ActoresSociales;

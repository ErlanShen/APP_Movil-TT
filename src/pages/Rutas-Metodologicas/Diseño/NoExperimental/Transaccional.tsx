import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Transaccional: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Diseño</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
            <IonCardTitle id='tcenter'>Transaccional</IonCardTitle>
              <IonCardContent id='tjustify'>
              Las investigaciones cualitativas suelen producir preguntas antes, durante o después de la recolección y análisis de los datos.
               La acción indagatoria se mueve de manera dinámica entre los hechos y su interpretación, y resulta un proceso más bien “circular” 
               en el que la secuencia no siempre es la misma, puede variar en cada estudio.
              </IonCardContent>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/correlacional"> Correlacional</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/descriptivo"> Descriptivo</IonButton>
          <IonButton expand="full" color="warning" routerLink="/exploratorio"> Exploratorio</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Transaccional;


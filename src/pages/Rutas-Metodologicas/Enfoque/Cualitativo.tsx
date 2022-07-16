import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardSubtitle,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Cualitativo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
            <IonCardTitle id='tcenter'>Cualitativo</IonCardTitle>
              <IonCardContent id='tjustify'>
              Las investigaciones cualitativas suelen producir preguntas antes, durante o después de la recolección y análisis de los datos.
               La acción indagatoria se mueve de manera dinámica entre los hechos y su interpretación, y resulta un proceso más bien “circular” 
               en el que la secuencia no siempre es la misma, puede variar en cada estudio.
              </IonCardContent>
            <IonCardSubtitle>Elija el tipo de realidad</IonCardSubtitle>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/sociocrítico"> ¿Quieres transformar la realidad?</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/interpretativo"> ¿Quieres interpretar la realidad?</IonButton>
          <IonButton expand="full" color="warning" routerLink="/socio-construccionista"> ¿Quieres reconstruir la realidad?</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cualitativo;


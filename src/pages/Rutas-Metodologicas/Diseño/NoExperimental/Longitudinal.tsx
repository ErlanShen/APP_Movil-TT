import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Longitudinal: React.FC = () => {
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
            <IonCardTitle id='tcenter'>Longitudinal</IonCardTitle>
              <IonCardContent id='tjustify'>
                Desc Longitudinal
              </IonCardContent>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/tendencia" id='tbut'> Describir el comportamiento de la variable en el tiempo</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/evoluciondegrupo" id='tbut'> Describir el comportamiento de un grupo en el tiempo</IonButton>
          <IonButton expand="full" color="warning" routerLink="/panel" id='tbut'> Describir el comportamiento de un grupo especifico en el tiempo</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Longitudinal;


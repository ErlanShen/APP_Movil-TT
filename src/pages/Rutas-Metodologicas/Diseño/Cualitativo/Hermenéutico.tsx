import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton } from '@ionic/react';


 const Hermenéutico: React.FC = () => {
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
          <IonCardTitle>Hermenéutico</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
           Descripcion de Hermenéutico
           </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Hermenéutico;

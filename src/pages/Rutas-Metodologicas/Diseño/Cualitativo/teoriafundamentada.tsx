import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton } from '@ionic/react';

 const Teoriafundamentada: React.FC = () => {
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
          <IonCardTitle>Teoria fundamentada</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
           Descripcion de Teoria fundamentada
           </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Teoriafundamentada;

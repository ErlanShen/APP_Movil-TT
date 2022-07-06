import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton } from '@ionic/react';


 const EvoluciondeGrupo: React.FC = () => {
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
          <IonCardTitle>Evolución de Grupo</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
           Descripcion de EvoluciondeGrupo
           </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EvoluciondeGrupo;

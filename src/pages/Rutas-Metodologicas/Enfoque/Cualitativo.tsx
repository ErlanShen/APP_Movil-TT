import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardSubtitle,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Cualitativo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
            <IonCardTitle>Cualitativo</IonCardTitle>
            <IonCardSubtitle>Elija el tipo de realidad</IonCardSubtitle>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/socio-crítico"> ¿Quieres transformar la realidad?</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/interpretativo"> ¿Quieres interpretar la realidad?</IonButton>
          <IonButton expand="full" color="warning" routerLink="/socio-construccionista"> ¿Quieres reconstruir la realidad?</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cualitativo;


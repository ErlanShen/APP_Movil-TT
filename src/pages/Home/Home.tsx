import React from 'react';
import { IonContent,  IonPage,IonToolbar,IonHeader, IonTitle,  IonCard,  IonCardContent, IonItem, IonButton } from '@ionic/react';

 const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rutas Metodologicas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonItem>
            <strong> ¿Cuál de los siguientes enfoques corresponde a su investigación? </strong>
          </IonItem>
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/cuantitativo">A) Prioriza la medición objetiva.</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/cualitativo">B) Se basa en la subjetividad.</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

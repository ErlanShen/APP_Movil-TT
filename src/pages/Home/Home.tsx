import React from 'react';
import { IonContent,  IonPage,IonToolbar,IonHeader, IonTitle,  IonCard,  IonCardContent, IonItem, IonButton, IonLabel } from '@ionic/react';


const Home: React.FC = () => {
 
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle  id='tcenter'>Rutas Metodologicas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonItem>
            <IonLabel id='talign'>¿Cuál de los siguientes enfoques corresponde a su investigación?</IonLabel>
          </IonItem>
          <IonCardContent>
            <IonButton expand="full" color="warning" routerLink="/cuantitativo">Prioriza la medición objetiva.</IonButton>
            <hr />
            <IonButton expand="full" color="warning" routerLink="/cualitativo">Se basa en la subjetividad.</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React from 'react';
import { IonContent,  IonPage,  IonCard,  IonCardContent, IonItem,  IonLabel, IonButton } from '@ionic/react';

 const SocioContruccionista: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonItem>
            <IonLabel>¿Quieres reconstruir la realidad?</IonLabel>
          </IonItem>
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/narrativo">Narrativo</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/teoriafundamentada">Teoría Fundamentada</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SocioContruccionista;

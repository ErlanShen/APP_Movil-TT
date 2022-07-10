
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardSubtitle,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const SocioContruccionista: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Paradigma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
            <IonCardTitle id='tcenter'>Socio Contruccionista</IonCardTitle>
              <IonCardContent id='tjustify'>
                Descripcion Socio Contruccionista
              </IonCardContent>
            <IonCardSubtitle>Especifica que quieres?</IonCardSubtitle>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/narrativo">Narrativo</IonButton>
          <IonButton expand="full"  color="warning" routerLink="/teoriafundamentada">Teoría Fundamentada</IonButton></IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SocioContruccionista;


import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardSubtitle,IonCardHeader, IonCardTitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';

 const Interpretativo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Paradigma</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
            <IonCardTitle id='tcenter'>Interpretativo</IonCardTitle>
              <IonCardContent id='tjustify'>
                Descripcion Interpretativo
              </IonCardContent>
            <IonCardSubtitle>Especifica que quieres?</IonCardSubtitle>
        </IonCardHeader>
          
          <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/fenomenológico"  id='tbut'> Comprender el sentido y significado de un fenómeno </IonButton>
          <IonButton expand="full"  color="warning" routerLink="/hermenéutico" id='tbut'> Comprender el sentido y significado que hay mas alla de las palabras</IonButton>
          <IonButton expand="full" color="warning" routerLink="/etnográfico" id='tbut'> Comprender el comportamiento y cultura de una etnia</IonButton>
          <IonButton expand="full" color="warning" routerLink="/estudiodecaso"> Comprender un caso en particular</IonButton>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Interpretativo;


import React, { useState } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  useIonAlert,
  IonImg,
  IonRow,
  IonCol,
  IonLoading
} from "@ionic/react";

import './Form.css';

export const Header: React.FC = () => {
 
  return (
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref={`/`} >Atras</IonBackButton>
            </IonButtons>
            <IonTitle>UNIB.E</IonTitle>
          </IonToolbar>
        </IonHeader>
  );
}

export default Header;
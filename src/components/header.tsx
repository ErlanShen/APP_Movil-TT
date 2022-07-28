import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Header;
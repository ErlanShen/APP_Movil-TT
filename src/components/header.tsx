import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Header: React.FC = () => {
  return (
      <IonHeader >
        <IonToolbar id='title-toolbar'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">Rutas Metodológicas</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
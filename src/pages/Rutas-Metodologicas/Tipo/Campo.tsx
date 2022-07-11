import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons} from '@ionic/react';
 const Campo: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Tipo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Campo </IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
            Se recolecta los datos directamente del sitio que se encuentra el fenomeno. 
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Campo;


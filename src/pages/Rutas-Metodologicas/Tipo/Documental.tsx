import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons} from '@ionic/react';
 const Documental: React.FC = () => {
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
          <IonCardTitle id='buttoncenter'>Documental </IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
            La información se recolecta de documentos y fuentes bibliográficas
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Documental;


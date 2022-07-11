import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonBackButton,IonButtons, IonButton} from '@ionic/react';
 const Correlacional: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Nivel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Correlacional </IonCardTitle>
            <IonCardContent id='tjustify'>
            Se  encarga  de buscar  las  causas  o  motivos  por  los  cuales  ocurre  un  fenómeno, conllevando  al  entendimiento  del mismo, 
            Para ello,  se  formula  una hipótesis causal, la cual es aceptada o rechazada a partir de pruebas estadísticas.  
          </IonCardContent>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="full" color="warning" routerLink="/campo">Fuentes primarias</IonButton>
        </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Correlacional;


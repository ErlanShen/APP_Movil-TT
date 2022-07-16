import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons} from '@ionic/react';
 const Positivista: React.FC = () => {
  return (
    <IonPage >
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
          <IonCardTitle id='buttoncenter'>Positivista </IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la información se puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent>
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle> ¿Quieres manipular variables?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent id='buttoncenter'>
            <IonButton size="small" color="tertiary" routerLink="/experimental"> Si</IonButton>
            <IonButton size="small" color="tertiary" routerLink="/no-experimental"> No</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Positivista;


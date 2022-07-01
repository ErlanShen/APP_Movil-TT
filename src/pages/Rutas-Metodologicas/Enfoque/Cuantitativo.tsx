import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardHeader, IonCardTitle,IonCardSubtitle, IonCardContent,  IonButton,IonBackButton,IonButtons } from '@ionic/react';
 
 const Cuantitativo: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Enfoque</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Cuantitivo </IonCardTitle>
            <IonCardTitle>Paradigma</IonCardTitle>
            <IonCardSubtitle>Positivista </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent>
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle> ¿Quieres manipular variables?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent id='buttoncenter'>
            <IonButton size="small" color="tertiary" routerLink="/interpretativo"> Si</IonButton>
            <IonButton size="small" color="tertiary" routerLink="/socio-construccionista"> No</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cuantitativo;


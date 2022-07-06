import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons} from '@ionic/react';
 const Cuasiexperimentos: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle>Diseño</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
        <IonCardHeader>
          <IonCardTitle id='buttoncenter'>Cuasi-Experimental</IonCardTitle>
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent>
        <IonCardContent>
            <IonCardContent id='buttoncenter'>
            <IonButton  color="tertiary" routerLink="/explicativo"> Nivel</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cuasiexperimentos;


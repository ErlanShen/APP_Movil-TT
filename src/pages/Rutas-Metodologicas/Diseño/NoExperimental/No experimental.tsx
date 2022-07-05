import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle, IonCardContent,IonButton,IonBackButton,IonButtons  } from '@ionic/react';

 const NoExperimental: React.FC = () => {

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
          <IonCardTitle id='buttoncenter'> No Experimental </IonCardTitle>
        </IonCardHeader>
        {/* <IonCardContent id='tjustify'>
          Asume la objetividad como única vía  para  alcanzar  el  conocimiento,  
          enfatiza  que  la informaciónse puede traducir en números, busca explicar,
          predecir y controlar los fenómenos,  así  como  verificar teorías y  fundamenta  
          el  análisis  en laestadística descriptivae inferencial.
        </IonCardContent> */}
        <IonCardContent>
          <IonCardHeader>
            <IonCardTitle id='tcenter'>¿En función del tiempo que necesitas?</IonCardTitle>
          </IonCardHeader >
            <IonCardContent >
            <IonButton size="small" expand="full"  color="tertiary" routerLink="/Transaccional">Un tiempo y momento unico</IonButton>
            <IonButton  size='small' expand="full" color="tertiary" routerLink="/FunciondelTiempo"> Diferentes momentos en el tiempo</IonButton>
          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
  
export default NoExperimental;
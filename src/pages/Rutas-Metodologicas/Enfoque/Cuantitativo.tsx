import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader,  IonCardTitle,  IonCardContent,IonButton,IonBackButton,IonButtons} from '@ionic/react';
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
        </IonCardHeader>
        <IonCardContent id='tjustify'>
          Carácter objetivo, debido a que el investigador observa, mide y manipula variables; 
          desprendiéndose de sus propias creencias,siendo la relación entre éste y el fenómeno de estudio, 
          independiente, es decir, lo que no puede medirse u observarse con precisión se descarta como “objeto” de estudio.
        </IonCardContent>
        <IonCardContent>
         
            <IonCardContent id='buttoncenter'>
            <IonButton color="tertiary" routerLink="/positivista"> Paradigma</IonButton>

          </IonCardContent>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cuantitativo;


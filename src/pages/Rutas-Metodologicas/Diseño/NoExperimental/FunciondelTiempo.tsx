import React from 'react';
import { IonAccordion, IonAccordionGroup,IonItem, IonLabel,IonPage,IonHeader,IonToolbar,IonButtons,IonBackButton,IonTitle, IonContent, IonCard, IonCardTitle} from '@ionic/react';
import { caretDownCircle } from 'ionicons/icons';
function FunciondelTiempo() {
  return (
    <IonPage >
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonBackButton />
            </IonButtons>
                <IonTitle>Longitudinal</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonCard>
        <IonCardTitle>
        <IonCardTitle id='buttoncenter'> ¿En funcion del tiempo quieres? </IonCardTitle>
        </IonCardTitle>
    <IonAccordionGroup>
         <IonAccordion value="first" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>Tendencia</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            Describir el comportamiento de la variable en el tiempo.
        </div>
      </IonAccordion> 

      <IonAccordion value="second" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>Evolución de grupos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
            Describir el comportamiento de un grupo en el tiempo.
        </div>
      </IonAccordion>
      <IonAccordion value="third" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light" >
          <IonLabel>Panel</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content" >
            Describir el comportamiento de un grupo especifico en el tiempo.
        </div>
      </IonAccordion>
    </IonAccordionGroup> 
    </IonCard>
       

    </IonContent>
    
    
    </IonPage>
  );
}
export default FunciondelTiempo;
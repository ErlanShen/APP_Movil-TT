import React from 'react';
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel,
  IonButton
} from '@ionic/react';
function Exploratorio() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        <IonButton expand="full" routerLink="/interpretativo">A</IonButton>
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light" >
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content" >
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Exploratorio;
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,  IonButtons, IonBackButton } from '@ionic/react';


 const SocioCritico: React.FC = () => {
  return (
    <IonPage>
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
          <IonCardTitle>Socio Critico</IonCardTitle>
            <IonCardContent>
            Descripcion Socio-Critico 
          </IonCardContent>
            <IonCardTitle id='tcenter'>Investigación Acción Participativa</IonCardTitle>
          </IonCardHeader>

          <IonCardContent id='tjustify'>
            Comprende un proceso de intervención directa en el contexto de estudio, donde se busca resolver las problemáticas
           que surgen desde la voz de los actores sociales y procurando el aprovechamiento de las bondades que estos tienen;
           ya que en esencia se direcciona a la trasformación y emancipación.
          </IonCardContent>
        </IonCard>

        
      </IonContent>
    </IonPage>
  );
};

export default SocioCritico;

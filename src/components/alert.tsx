import React from 'react';
import { IonButton, IonContent, useIonAlert } from '@ionic/react';

function AlertMessage() {
  const [presentAlert] = useIonAlert();
  
  return (
    <IonContent>
      <IonButton onClick={() => presentAlert({
        header: 'Se a creado una nueva cuenta',
        subHeader: 'Correo de confirmación enviado',
        message: 'Se ah enviado un correo para confirmar la cuenta revise su bandeja de entrada o spam',
        buttons: ['OK']
      })} routerLink="/login">Cerrar</IonButton>
    </IonContent>
  );
}
export default AlertMessage;
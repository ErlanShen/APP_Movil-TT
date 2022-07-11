/* Using the useIonToast Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonToast } from '@ionic/react';

const Toast: React.FC = () => {
  const [present, dismiss] = useIonToast();

  function showToast() {
    const toast = present({
      message: 'funcion de toast',
      duration: 2000,
    });
    console.log(toast);
    
  }
  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'hide', handler: () => dismiss() }],
              message: 'toast from hook, click hide to dismiss',
              onDidDismiss: () => console.log('dismissed'),
              onWillDismiss: () => console.log('will dismiss'),
            })
          }
        >
          Show Toast
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello from hook', 3000)}
        >
          Show Toast using params, closes in 3 secs
        </IonButton>
        <IonButton expand="block" onClick={dismiss}>
          Hide Toast
        </IonButton>
        <IonButton expand="block" onClick={showToast}>
          Hide Toast
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Toast;

export function toast(message: string, duration = 2500, color = 'warning') {
  const toast = document.createElement('ion-toast');
  toast.message = message;
  toast.duration = duration;
  toast.color = color;

  document.body.appendChild(toast);
  return toast.present();
}
import React, { useState } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  useIonAlert,
  IonImg,
  IonRow,
  IonCol,
  IonIcon
} from "@ionic/react";

import { useHistory } from 'react-router-dom';



import './Form.css';
import { useAuth } from '../context/authContext';
import { checkmarkDoneOutline, checkmarkDoneSharp } from 'ionicons/icons';

export const ResetPassword: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    if (!email) { setError('El correo es requerido'); }
    try {
      await resetPassword(email).then((res: any) => {
        if (!res) {
          console.log("se a reseteado");
          alerta();
        } else {
          console.log("Ingrese un correo valido");
        }
      });
    } catch (error: any) {
      if (error.code) {
        setError(error.message);
        console.log(error);
      }
    }
    setEmail("");
  }

  const alerta = () => presentAlert({
    header: 'Se a enviado un correo de recuperación',
    subHeader: 'Por favor revise su bandeja de entrada o spam',
    message: 'Se ha enviado un correo de verificación de cuenta, por favor revise su bandeja de entrada o spam',
    buttons: [{ text: 'Listo', handler: () => history.push('/login') }],
  });

  return (

    <IonPage id='fondoUnibe'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='container'>
        <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle><h1 className='title'>Restablecer Contraseña</h1></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p id='text'>
              Por favor escribe el correo electrónico de la cuenta registrada:
            </p>
            <form onSubmit={handlerSubmit} className="form">
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput required clearInput type="email" name='email' onIonChange={(e: any) => setEmail(e.target.value)} />
              </IonItem>
            </form>
            <hr />
            <div id='buttoncenter'>
              <IonButton color='warning' onClick={handlerSubmit}>
              <IonIcon icon={checkmarkDoneSharp || checkmarkDoneOutline} size='large' slot="start" color='light'/>
                Confirmar</IonButton>
            </div>
            <div id='buttoncenter'>
              <IonButton className="btn-text" routerLink="/login" fill='clear' color='dark'>Volver al inicio de sesión!</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </IonPage>


  );
}

export default ResetPassword;
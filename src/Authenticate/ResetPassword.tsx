import React, { useState } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
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
  IonCol
} from "@ionic/react";

import { Link, useHistory } from 'react-router-dom';



import './Form.css';
import { useAuth } from '../context/authContext';

export const ResetPassword: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handlerSubmit = async (evento: any) => {
    evento.preventDefault();
    if (!email) {setError('El correo es requerido');}
    try {
      const res = await resetPassword(email);
      if (!res) {
        console.log("se a reseteado");
        alerta();
      } else {
        setError("Ingrese un correo valido");
      }
    } catch (error: any) {
      if (error.code) {
        setError(error.message);
      }
    }
    return false;
  }
  const alerta = () => presentAlert({
    header: 'Se a enviado un correo de recuperación',
    subHeader: 'Por favor revise su bandeja de entrada o spam',
    message: 'Se ha enviado un correo de verificación de cuenta, por favor revise su bandeja de entrada o spam',
    buttons: [{ text: 'Listo', handler: () => history.push('/login') }],
  });

  return (

    <IonPage className="flex-cart form" id='container1'>
      <IonContent className="">

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref={`/`} />
            </IonButtons>
            <IonTitle>UNIB.E</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle className='title'>Restablecer Contraseña</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput required clearInput type="email" name='email' onIonChange={(e: any) => setEmail(e.target.value)}/>
              </IonItem>
            </form>
            <IonRow>
              <IonCol />
              <IonCol size='10' className="below-form">
                <IonButton id='tbut' color='warning' onClick={handlerSubmit}>Confirmar</IonButton>
                <div className="below-form">
                  <Link to='/login' >Volver a Inicio de Sesión</Link>
                </div>
              </IonCol>
              <IonCol />
            </IonRow>

          </IonCardContent>
        </IonCard>
        {error && <p className='Error'>{error}</p>}
      </IonContent>
    </IonPage>


  );
}

export default ResetPassword;
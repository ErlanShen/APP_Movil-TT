import React, { useState } from 'react';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonRow, IonImg, useIonToast, IonLoading } from '@ionic/react';

import './Form.css';// Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';
import { logoGoogle } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const history = useHistory();
  const { loginUser, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [busy , setBusy] = useState(false);
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    setBusy(true);
    if (!correo || !contrasenia) {
      toast('El correo y la contraseña son requeridos');
    }
    try {
      const res = await loginUser(correo, contrasenia);
      history.push('/exploreContainer');
      setBusy(false);
      console.log(`${res ? 'Login Success' : 'Login Failed'}`);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast("Correo ya está en uso");
      }
      if (error.code === 'auth/invalid-email') {
        toast('Correo no es válido');
      } else if (error.code === 'auth/user-not-found') {
        toast('Usuario no encontrado');
      }
      toast(error.message);
      setBusy(false);
    }
  }

  const handlerGoogleSignIn = async () => {
    setBusy(true);
    try {
      const res = await loginWithGoogle();
      if (res) {
        history.push('/page/Home');
        setBusy(false);
      }
      return (`${res ? toast('Inicio de sesión exitoso', 'success') : toast('Error de inicio de sesión','danger')}`);
    } catch (error: any) {
      toast(error.message);
      setBusy(false);
    }
  }

  const [present, dismiss] = useIonToast();
  const toast = (message: string, color? : string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss() }],
    message: message,
    duration: 2500,
    position: 'bottom',
    color: color ? color : 'warning',
    animated: true,
  })

  return (

    <IonPage id='container1'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>
        <div className='container'>
          <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle className='title'>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">

              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput min={9} max={40} clear-on-edit={true} required={true} inputmode="email" clear-input={true} type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput required show- clear-input={true} type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
              </IonItem>
              <hr />
              <div className="below-form text">
                <Link to='/reset-password' >Olvide mi contraseña</Link>
              </div>
            </form>
            <IonRow>
              <IonCol />
              <IonCol size='9' className="below-form">
                <IonButton color="warning" onClick={handlerSubmit} id='tbut'>Iniciar sesión</IonButton>
               {/*  <IonButton color='primary' onClick={handlerGoogleSignIn} id='tbut'>
                  <IonIcon icon={logoGoogle} size="large" slot="start" color='light'/>
                  Iniciar sesión con Google
                </IonButton> */}
                <IonButton className='below-form text' routerLink="/register" fill='clear' color='dark' id='tbut'>Registrarme</IonButton>
              </IonCol>
              <IonCol />
            </IonRow>
          </IonCardContent>
        </IonCard>
        </div>
      <IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
    </IonPage>
  );
};
export default Login;
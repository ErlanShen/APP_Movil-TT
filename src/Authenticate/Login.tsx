import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonRow, IonImg, useIonToast, IonLoading } from '@ionic/react';

import './Form.css';// Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';
import { logoGoogle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Header from './header';


const Login: React.FC = () => {

  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const history = useHistory();
  const { loginUser, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  //checkbox
  const [checked, setChecked] = useState(false);
  const [busy, setBusy] = useState<boolean>(false);

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    if (!correo || !contrasenia) {
      toast('El correo y la contraseña son requeridos');
    }
    try {
      const res = await loginUser(correo, contrasenia);
      console.log(`${res ? 'Login Success' : 'Login Failed'}`);
      if (res === false) {
        toast('Autenticación fallida');
      } else if (res === true) {
        setBusy(true);
        toast("Bienvenido");
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast("Este correo ya está en uso");
      } else if (error.code === 'auth/invalid-email') {
        toast('Correo no es válido');
      } else if (error.code === 'auth/user-not-found') {
        toast('Usuario no encontrado');
      } else if (error.code === 'auth/wrong-password') {
        toast('Contraseña incorrecta');
      } else if (error.code === 'auth/network-request-failed') {
        toast('No hay conexión a internet');
      }
      toast(error.message);
    }
    setBusy(false);
    return false;
  }

  const handlerGoogleSignIn = async () => {
    setBusy(true);
    try {
      const res = await loginWithGoogle();
      history.push('/page/Home');
      console.log(`${res ? 'Login Success' : 'Login Failed'}`);
    } catch (error: any) {
      toast(error.message);
    }
  }

  const [present, dismiss] = useIonToast();
  const toast = (message: string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss(),  }],
    message: message,
    duration: 2500,
    position: 'bottom',
    color: 'danger',
    animated: true,
  })

  return (

    <IonPage className="flex-cart form" id='container1'>
      <Header/>

      <IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
      
      <IonContent className="flex-cart login1 login form">
        <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle className='title'>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">

              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput required clear-input clear-on-edit type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput required clear-on-edit type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
              </IonItem>
              <hr />

              <div className="below-form text">
                <Link to='/reset-password' >Olvide mi contraseña</Link>
              </div>

              {/* <IonItem lines='none'>
                <IonLabel>Recordarme: {JSON.stringify(checked)}</IonLabel>
                <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} slot="start" />
              </IonItem> */}

            </form>
            <IonRow>
              <IonCol />
              <IonCol size='9' className="below-form">
                <IonButton color="warning" onClick={handlerSubmit} id='tbut'>Iniciar sesión</IonButton>
                <IonButton color='primary' onClick={handlerGoogleSignIn} id='tbut'>
                  <IonIcon icon={logoGoogle} size="large" slot="start" color='light' />
                  Iniciar sesión con Google
                </IonButton>
                <IonButton className='below-form text' routerLink="/register" fill='clear' color='dark' id='tbut'>Registrarme</IonButton>
              </IonCol>
              <IonCol />
            </IonRow>
          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>


  );
};

export default Login;
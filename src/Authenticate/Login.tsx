import React, { useState } from 'react';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonRow, IonImg, useIonToast, IonLoading } from '@ionic/react';

import './Form.css';// Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { logInOutline, logInSharp } from 'ionicons/icons';

const Login: React.FC = () => {

  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const history = useHistory();
  const { loginUser } = useAuth();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
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
      return (`${res ? toast('iniciar sesion Exitosa!', 'success') : toast('Fallo al iniciar sesion', 'danger')}`);
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
    setContrasenia('');
    setCorreo('');
  }
  const [present, dismiss] = useIonToast();
  const toast = (message: string, color?: string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss() }],
    message: message,
    duration: 2000,
    position: 'bottom',
    color: color ? color : 'warning',
    animated: true,
  })

  return (

    <IonPage id='fondoUnibe'>
      <IonHeader>
        <IonToolbar id='title-toolbar'>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className='container'>
        <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle><h1 className='title'>Inicio de Sesión</h1></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput min={9} max={40} clear-input={true} required={true} type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput required show- clear-input={true} type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
              </IonItem>
              <hr />
              <div className="below-form">
                <Link to='/reset-password' >Olvide mi contraseña</Link>
              </div>
            </form>
            <hr />
              <div id='buttoncontainer' >
                <IonButton color="warning" onClick={handlerSubmit}>
                <IonIcon icon={logInSharp || logInOutline} size='large' slot="start" color='light'/>
                  Iniciar sesión</IonButton>
              </div>
              <div id='buttoncenter'>
                <IonButton className="btn-text" routerLink="/register" fill='clear' color='dark'>Crear una cuenta</IonButton>
              </div>
          </IonCardContent>
        </IonCard>
      </div>
      <IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
    </IonPage>
  );
};
export default Login;
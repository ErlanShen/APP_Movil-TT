import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput, IonCheckbox, IonIcon, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

import './Form.css';// Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';
import { presentToast } from '../components/toast';

const Login: React.FC = () => {


  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const history = useHistory();
  const { loginUser, loginWithGoogle } = useAuth();
  const [error, setError] = useState();


  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser(correo, contrasenia);
      history.push('/page/Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        presentToast("Correo ya está en uso");
      }
      setError(error.message);
    }
  }

  const handlerGoogleSignIn = async() => {
    await loginWithGoogle();
    history.push('/page/Home');
  }

  return (

    <IonPage id='container1'>
      <IonContent className="login1 login">
      <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Inicio de Sesión</IonTitle>
      </IonToolbar>
    </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">

              <IonItem>
                <IonLabel position="floating">Correo Electronico</IonLabel>
                <IonInput type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
              </IonItem>

              <IonItem>
                <IonLabel>
                  <p className="text-checkbox">Recordarme</p>
                </IonLabel>
                <IonCheckbox color="warning" slot="end" checked></IonCheckbox>
              </IonItem>
              <IonButton color="dark" fill="clear" routerLink="/reset-password">
                <p className="text-gris">Olvide mi correo/contraseña</p>
              </IonButton>
            </form>

<<<<<<< HEAD
            <IonCol>
              <IonButton onClick={handlerSubmit}  >Iniciar Sesión</IonButton>
=======
            <IonCol className="below-form">
              <IonButton onClick={handlerSubmit} >Iniciar Sesión</IonButton>
>>>>>>> nicolas
              <IonButton color="warning" routerLink="/register">Crear cuenta</IonButton>
              <IonButton color="light" onClick={handlerGoogleSignIn}>
              <IonIcon name="logo-google"></IonIcon>Iniciar Sesión con Google</IonButton>
            </IonCol>


          </IonCardContent>
        </IonCard>
      </IonContent>


    </IonPage>


  );
};

export default Login;
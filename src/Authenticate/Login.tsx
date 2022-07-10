import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonRow } from '@ionic/react';

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
  const [error, setError] = useState();
  //checkbox
  const [checked, setChecked] = useState(false);

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser(correo, contrasenia);
      history.push('/page/Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log("Correo ya está en uso");
      }
      setError(error.message);
    }
  }

  const handlerGoogleSignIn = async () => {
    await loginWithGoogle();
    history.push('/page/Home');
  }


  return (

    <IonPage id='container1'>

      <IonHeader>
          <IonToolbar>
            <IonTitle>UNIB.E</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className="flex-cart login1 login form">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">

              <IonItem>
                <IonLabel position="floating">Correo Electronico</IonLabel>
                <IonInput type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} clearInput clearOnEdit/>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
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
              <IonCol/>
              <IonCol size='9' className="below-form">
                <IonButton color="warning" onClick={handlerSubmit} id='tbut'>Iniciar sesión</IonButton>
                <IonButton color='secondary' onClick={handlerGoogleSignIn} id='tbut' >
                  <IonIcon icon={logoGoogle} size="large" slot="start" color='light' />
                  Iniciar sesión con Google
                </IonButton>
                <IonButton routerLink="/register" fill='outline' color='dark' id='tbut'>Crear cuenta</IonButton>
              </IonCol>
              <IonCol/>
            </IonRow>
          </IonCardContent>
        </IonCard>
        {error && <p>{error}</p>}
      </IonContent>


    </IonPage>


  );
};

export default Login;
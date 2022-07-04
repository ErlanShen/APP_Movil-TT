import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol, IonItem, IonLabel, IonInput } from '@ionic/react';

import './Login.css'; // Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {


  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const history = useHistory();
  const { loginUser } = useAuth();
  const [error, setError] = useState();


  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser(correo, contrasenia);
      history.push('/page/Home');
    } catch (error: any) {
      /* if (error.code === 'auth/email-already-in-use') {
        setError("Correo ya está en uso");
      } */
      setError(error.message);
    }
  }

  return (

    <IonPage id='container1'>
      <IonContent className="login1 login">
        {error && <p>{error}</p>}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit}>

              <IonItem>
                <IonLabel position="floating">Correo Electronico</IonLabel>
                <IonInput type="email" name='email' onIonChange={(e: any) => setCorreo(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onIonChange={(e: any) => setContrasenia(e.target.value)} />
              </IonItem>

              {/*  <IonItem>
                <IonLabel>
                  <p className="text-checkbox">Recordarme</p>
                </IonLabel>
                <IonCheckbox color="warning" slot="end" checked></IonCheckbox>
              </IonItem>

              <IonButton color="dark" fill="clear" >
                <p className="text-gris">Olvide mi Correo/Contraseña</p>
              </IonButton> */}

              {/* <button type='submit'>Iniciar Sesión</button> */}
            </form>

            <IonCol>
              <IonButton onClick={handlerSubmit}  >Iniciar Sesión</IonButton>
              <IonButton color="warning" routerLink="/register">Crear cuenta</IonButton>
            </IonCol>


          </IonCardContent>
        </IonCard>
      </IonContent>


    </IonPage>


  );
};

export default Login;
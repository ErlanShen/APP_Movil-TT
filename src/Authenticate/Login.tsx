import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonInput, IonCheckbox } from '@ionic/react';

import './Login.css'; // Import the CSS file
import "firebase/firestore"

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function loginUser() {
    console.log(email, password);
  }

  return (

    <IonPage id='container1'>
      <IonContent className="login1">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Inicio de Sesión</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Correo?</IonLabel>
              <IonInput type='email' onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña?</IonLabel>
              <IonInput type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel>
                <p className="text-checkbox">Recordarme</p>
              </IonLabel>
              <IonCheckbox color="warning" slot="end" checked></IonCheckbox>
            </IonItem>

            <IonButton color="dark" fill="clear" >
              <p className="text-gris">Olvide mi Correo/Contraseña</p>
            </IonButton>
            <IonButton color="warning" shape="round" onClick={loginUser}>Iniciar Sesión</IonButton>
            <IonButton color="warning" shape="round" fill="outline" routerLink="/register">Crear cuenta</IonButton>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>


  );
};

export default Login;
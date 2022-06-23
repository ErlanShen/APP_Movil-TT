import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonInput } from '@ionic/react';


import './Register.css'; // Import the CSS file


const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setcPassword] = useState('');

  function registerUser() {
    console.log(email, password, cPassword);
  }

  return (


    <IonPage className="flex-cart">
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Formulario registro</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Correo</IonLabel>
              <IonInput type='email' onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Confirmar Contraseña</IonLabel>
              <IonInput type='password' onIonChange={(e: any) => setcPassword(e.target.value)}></IonInput>
            </IonItem>


            <IonButton color="primary" shape="round" onClick={registerUser}>Registrarte</IonButton>
            <IonButton color="dark" fill="clear" routerLink="/login">
              <p className="text-gris">Ya tengo una cuenta!</p>
            </IonButton>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>



  );
};

export default Register;
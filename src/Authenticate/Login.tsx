import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonInput, IonCheckbox } from '@ionic/react';

import './Login.css'; // Import the CSS file
import "firebase/firestore"
import { loginUser } from '../Firebase/firebaseConfig';
import { toast } from '../components/toast';

const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* const { login } = React.useContext(ContextNavigation);
  const users = firebase.firestore().collection('user'); */


/*   function loginUser() {
    users.where('emailPersonal', '==', email).get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.data().passwordPersonal === password) {
                    console.log(doc.id);
                    login()
                } else {
                    alert('Contraseña incorrecta')
                }
            })
        }).catch((err) => {
            alert('Usuario no encontrado')
        })
} */

  async function login() {
    const res = await loginUser(email, password);
    if (!res) {
      toast('Usuario o contraseña incorrectos');
    } else {
      toast('Bienvenido')
    }
    
    console.log(`${res ? 'Login Success' : 'Login Failed'}`);
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
            <IonButton color="warning" shape="round" onClick={login}>Iniciar Sesión</IonButton>
            <IonButton color="warning" shape="round" fill="outline" routerLink="/register">Crear cuenta</IonButton>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>


  );
};

export default Login;
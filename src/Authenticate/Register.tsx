import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonInput } from '@ionic/react';


import './Register.css'; // Import the CSS file
import { toast } from '../components/toast';
import { registerUser } from '../Firebase/firebaseConfig';

const Register: React.FC = () => {

  /* const [user, setUser] = useState(''); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword,setcPassword] = useState('');

  /* const users = firebase.firestore().collection('usuarios');


  function register() {
    let Personal = {
        userPersonal: user,
        emailPersonal: email,
        passwordPersonal: password
    }
    
    users.where('userUsuario', '==', user).get()
    .then((snapshot) => {
        if (snapshot.size < 1){
            users.doc().set(Personal);
            toast('Usuario creado');
            navigation.navigate('login');
        }else {
            alert('El usuario ya esta registrado ')
        }
     }).catch(() => {
          alert('Error al registrar')
     });
     
    users.doc().set(Personal); 
    NavigationRoute.navigate('Login') 

}*/
  async function register() {
    // validation 
    if (password !== cPassword) {
      return toast('Passwords do not match');
    }
    if (email.trim() === '' || password.trim() === '') {
      return toast('Please enter all fields');      
    }

    const res = await registerUser(email, password);
    if (res) {
      toast('Registered Successfully');
    }
  }
  return ( 


    <IonPage className="flex-cart">
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Formulario registro</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {/* <IonItem>
              <IonLabel position="floating">Nombre de Usuario</IonLabel>
              <IonInput type='text' onIonChange={(e: any) => setUser(e.target.value)}></IonInput>
            </IonItem> */}
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


            <IonButton color="primary" shape="round" onClick={register}>Registrarte</IonButton>
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


import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonCol, IonItem, IonInput } from '@ionic/react';
import './Register.css'; // Import the CSS file
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext';


const Register: React.FC = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { registerUser } = useAuth();
  const [error, setError] = useState();
  /* const [rol, setRol] = useState('student'); */

  /* async function registerUsuario(email: string, password: string, rol: string) {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        return response
      });
    setDoc(docuRef, { corre: email, rol: rol });
  } */


  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    try {
      await registerUser(displayName, email, password);
      history.push('/login');
    } catch (error: any) {
      /* if (error.code === 'auth/email-already-in-use') {
        setError("Correo ya está en uso");
      } else if (error.code === 'auth/invalid-email') {
        setError('Correo no es válido');
      } */
      setError(error.message);
    }
  }


  return (

    <IonPage className="flex-cart">
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Formulario registro</IonCardTitle>
          </IonCardHeader>
          {error && <p>{error}</p>}
          <IonCardContent>
            <form onSubmit={handlerSubmit}>
              <IonItem>
                <IonLabel position="floating">Nombre de Usuario</IonLabel>
                <IonInput type="text" name='displayName' id='displayName' onIonChange={(e: any) => setDisplayName(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Correo Electronico</IonLabel>
                <IonInput type="email" name='email' onIonChange={(e: any) => setEmail(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onIonChange={(e: any) => setPassword(e.target.value)} />
              </IonItem>
              {/* 
              <IonItem>
                <IonLabel position="floating">Confirmar Contraseña</IonLabel>
                <IonInput type='password' name='cPassword' id='cPassword' onChange={handlerChange}></IonInput>
              </IonItem> */}
              <hr />
              {/* <IonList>
                <IonItem>
                  <IonLabel>Asignar Rol:</IonLabel>
                  <IonSelect interface="popover" id='rol' onChange={(e: any) => setRol(e.target.value)}>
                    <IonSelectOption value="admin">Admin</IonSelectOption>
                    <IonSelectOption value="user">Usuario</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>  */}
            </form>

            <hr />
            <IonCol className="ion-align-self-center">
              <IonButton shape="round" onClick={handlerSubmit}>Registrar</IonButton>
              <IonButton color="dark" fill="clear" routerLink="/login">
                <p className="text-gris">Ya tengo una cuenta!</p>
              </IonButton>
            </IonCol>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>



  );
};

export default Register;


import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCol } from '@ionic/react';

import './Login.css'; // Import the CSS file
import { useHistory } from 'react-router';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const { loginUser } = useAuth();
  const [error, setError] = useState();

  const handlerChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser(user.email, user.password);
      history.push('/page/:id');
    } catch (error: any) {
      /* if (error.code === 'auth/email-already-in-use') {
        setError("Correo ya está en uso");
      }  */
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

              <label htmlFor="email">Correo electronico</label>
              <input type="email" id='email' onChange={handlerChange} />
              <label htmlFor="password">Contraseña</label>
              <input type='password' name='password' id='password' onChange={handlerChange} />

              {/* <IonItem>
                <IonLabel position="floating">Correo Electronico</IonLabel>
                <IonInput type="email" name='email' id='email' onChange={handlerChange}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onChange={handlerChange}></IonInput>
              </IonItem> */}

              {/*  <IonItem>
                <IonLabel>
                  <p className="text-checkbox">Recordarme</p>
                </IonLabel>
                <IonCheckbox color="warning" slot="end" checked></IonCheckbox>
              </IonItem>

              <IonButton color="dark" fill="clear" >
                <p className="text-gris">Olvide mi Correo/Contraseña</p>
              </IonButton> */}

              <button type='submit'>Iniciar Sesión</button>
            </form>

            <IonCol>
              <IonButton color="warning" shape="round" fill="outline" routerLink="/register">Crear cuenta</IonButton>
            </IonCol>


          </IonCardContent>
        </IonCard>
      </IonContent>


    </IonPage>


  );
};

export default Login;
import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonInput, IonCol, } from '@ionic/react';
import './Register.css'; // Import the CSS file
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext';


const Register: React.FC = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const { registerUser } = useAuth();
  const [error , setError] = useState();
  /* const [rol, setRol] = useState('student'); */

  /* async function registerUsuario(email: string, password: string, rol: string) {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        return response
      });
    setDoc(docuRef, { corre: email, rol: rol });
  } */

  const handlerChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    try {
      await registerUser(user.email, user.password,);
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

              
              <IonLabel>Correo electronico</IonLabel>
              <input type="email" name='email' id='email' onChange={handlerChange} />
              <label htmlFor="password">Contraseña</label>
              <input type='password' name='password' id='password' onChange={handlerChange} />
{/*               <label htmlFor="cPassword">Confirmar Contraseña</label>
              <input type="password" name='cPassword' id='cPassword' onChange={handlerChange} />
 */}
              {/*    <IonItem>
                <IonLabel position="floating">Correo</IonLabel>
                <IonInput type='email' name='email' id='email' onChange={handlerChange}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type='password' name='password' id='password' onChange={handlerChange}></IonInput>
              </IonItem>
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


              <button>Registrar</button>
              {/* <IonButton color="primary" shape="round"></IonButton> */}
            </form>

            <hr />
            <IonCol className="ion-align-self-center">


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
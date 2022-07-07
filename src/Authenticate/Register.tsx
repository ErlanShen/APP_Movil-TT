import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonCol, IonItem, IonInput, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import './Form.css'; // Import the CSS file
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext';


const carrers = [
  {
    id: 1,
    name: "Turismo"
  },
  {
    id: 2,
    name: "Producción"
  },
  {
    id: 3,
    name: "Software"
  },
  {
    id: 4,
    name: "Nutrición"
  },
  {
    id: 5,
    name: "Economía"
  },
  {
    id: 6,
    name: "Enfermería"
  },
  {
    id: 7,
    name: "Derecho"
  },
  {
    id: 8,
    name: "Gastronomía"
  },
];

const Register: React.FC = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carrera, setCarrera] = useState('');
  const history = useHistory();
  const { registerUser, sendEmail } = useAuth();
  const [error, setError] = useState();



  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    console.log(displayName, email, password, carrera);
    try {
      await registerUser(displayName, email, password, carrera);
      history.push('/login');
    } catch (error: any) {
      /* if (error.code === 'auth/email-already-in-use') {
        presentToast("Correo ya está en uso");
      } else if (error.code === 'auth/invalid-email') {
        presentToast('Correo no es válido');
      } */
      error(error.message);
      sendEmail()
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
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput type="text" name='displayName' id='displayName' onIonChange={(e: any) => setDisplayName(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput type="email" name='email' onIonChange={(e: any) => setEmail(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" name='password' id='password' onIonChange={(e: any) => setPassword(e.target.value)} />
              </IonItem>
              
              <hr />
              <IonList>
                <IonItem>
                  <IonLabel>Seleccione carrera:</IonLabel>
                  <IonSelect interface="popover" onIonChange={(e: any) => setCarrera(e.target.value)}>
                    {carrers.map(carrer => (
                      <IonSelectOption key={carrer.id} value={carrer}>{carrer.name}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonList>
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


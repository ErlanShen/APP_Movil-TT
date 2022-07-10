import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonItem, IonInput, IonList, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, useIonAlert, IonRow, IonCol } from '@ionic/react';
import './Form.css'; // Import the CSS file
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext';

const carrers = [
  { name: "Turismo" },
  { name: "Producción" },
  { name: "Software" },
  { name: "Nutrición" },
  { name: "Economía" },
  { name: "Enfermería" },
  { name: "Derecho" },
  { name: "Gastronomía" },
];

const Register: React.FC = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carrera, setCarrera] = useState('');
  const history = useHistory();
  const { registerUser } = useAuth();
  const [error, setError] = useState(null);

  const [presentAlert] = useIonAlert();
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    try {
      await registerUser(displayName, email, password, carrera);
      history.push('/login');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        /*   setError("Correo ya está en uso");
        } else if (error.code === 'auth/invalid-email') {
          setError('Correo no es válido');
        } */
        setError(error.message);
      }
      return false;
    }
  }

  const alerta = () => presentAlert({
    header: 'Se a creado una nueva cuenta',
    subHeader: 'Correo de confirmación enviado',
    message: 'Se ah enviado un correo para confirmar la cuenta revise su bandeja de entrada o spam',
    buttons: ['OK']
  })

  return (

    <IonPage className="flex-cart form">
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Formulario registro</IonCardTitle>
          </IonCardHeader>
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
                  <IonSelect interface="popover" onIonChange={ev => setCarrera(JSON.stringify(ev.detail.value))}>
                    {carrers.map(carrer => (
                      <IonSelectOption key={carrer.name} value={carrer}>{carrer.name}</IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonList>
            </form>

            <hr />
            <IonRow>
              <IonCol />
              <IonCol size='10' className="below-form">
                <IonButton color='warning' onClick={handlerSubmit}  id='tbut'>Registrar</IonButton>
                <IonButton  size='small' color="dark" fill="clear" routerLink="/login" id='tbut'>
                  <p className="below-form text">Ya tengo una cuenta!</p></IonButton>
              </IonCol>
              <IonCol />
            </IonRow>

              
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>



  );
};

export default Register;


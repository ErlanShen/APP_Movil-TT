import React, { useState } from 'react';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonItem, IonInput, IonList, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, useIonAlert, IonRow, IonCol, IonImg, useIonToast, IonLoading } from '@ionic/react';
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
  const [error, setError] = useState('');
  const [presentAlert] = useIonAlert();
  const [busy, setBusy] = useState(false);
  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    setError(error);
    if (!displayName || !email || !password || !carrera) {
      toast('Todos los campos son requeridos');
    } else if (password.length < 8) {
      toast('La contraseña debe tener al menos 8 caracteres');
    } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.indexOf('.')) {
      toast('El correo electrónico no es válido');
    } else if (carrera === '') {
      toast('Seleccione una carrera');
    } else if (password.indexOf(' ') !== -1) {
      toast('La contraseña no debe contener espacios');
    }
    else {
      setBusy(true);
      try {
        await registerUser(displayName, email, password, carrera);
        toast("se a registrardo", "success");
        alerta();
        setBusy(false);
        return true;
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          toast("Correo ya está en uso");
        } else if (error.code === 'auth/invalid-email') {
          toast('Correo no es válido');
        } else if (error.code === 'auth/weak-password') {
          toast('Contraseña no es válida');
        } else {
          toast('Error al registrarse');
        }
        toast(error.message);
        setBusy(false);
        return false;
      }
    }
    setDisplayName("");
    setEmail("");
    setPassword("");
    setCarrera("");
    e.target.reset();
  }
  const alerta = () => presentAlert({
    header: 'Se a creado una nueva cuenta',
    message: 'Puede iniciar sesión ahora',
    buttons: [{ text: 'Listo', handler: () => history.push('/login') }],
  })

  const [present, dismiss] = useIonToast();
  const toast = (message: string, color?: string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss() }],
    message: message,
    duration: 2500,
    position: 'bottom',
    color: color ? color : 'danger',
    animated: true,
  })
  return (
    
    <IonPage  id='container1'>
      <IonHeader id='color-background'>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className='container'>
        <IonCard>
          <IonImg class='imagen' src="https://firebasestorage.googleapis.com/v0/b/app-movil-tt.appspot.com/o/logo_sin_fondo.png?alt=media&token=f383adaa-8ac4-4a52-8c83-4888ab1704c1"></IonImg>
          <IonCardHeader>
            <IonCardTitle className='title'>Formulario registro</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit}>
              <IonItem>
                <IonLabel position="floating">Nombre de usuario</IonLabel>
                <IonInput required clearInput inputMode='text' type="text" pattern='[A-Za-z]{30}' name='displayName' id='displayName' onIonChange={(e: any) => setDisplayName(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput required clearInput placeholder='email123@ejemplo.com' type='email' name='email' onIonChange={(e: any) => setEmail(e.target.value)} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput required clearInput type="password" name='password' id='password' onIonChange={(e: any) => setPassword(e.target.value)} />
              </IonItem>
              <IonList>
                <IonItem>
                  <IonLabel>Seleccione carrera:</IonLabel>
                  <IonSelect interface="popover" onIonChange={(e: any) => setCarrera(e.target.value)}>
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
                <IonButton expand="block" color='warning' onClick={handlerSubmit} id='tbut'>Registrar</IonButton>
                <IonButton className='below-form text' size='small' color="dark" fill="clear" routerLink="/login" id='tbut'>Ya tengo una cuenta!</IonButton>
              </IonCol>
              <IonCol />
            </IonRow>
          </IonCardContent>
        </IonCard>
      </div>
      {/* Componenete loading */}<IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
    </IonPage>
  );
};

export default Register;


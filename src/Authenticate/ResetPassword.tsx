import React, { useState } from 'react';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonBackButton,
  useIonAlert
} from "@ionic/react";

import { Link, useHistory } from 'react-router-dom';



import './Form.css';

export const ResetPassword: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await (email);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log("Correo ya está en uso");
      }
      setError(error.message);
    }
  }

  return (

    <IonPage id='container1'>
      <IonContent className="login1 login form">

      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>UNIB.E</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Restablecer Contraseña</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form onSubmit={handlerSubmit} className="form">
              <IonList>
                <IonItem>
                  <IonLabel position="floating">Correo Electronico</IonLabel>
                  <IonInput type="email" name='email' onIonChange={(e: any) => setEmail(e.target.value)} clearInput clearOnEdit />
                </IonItem>
                <IonButton fill="clear" type="submit">Confirmar</IonButton>
              </IonList>
            </form>

            <div className="below-form">
              <Link to='/login' >Volver a Inicio de Sesión</Link>
            </div>
          </IonCardContent>
        </IonCard>
        {error && <p>{error}</p>}
      </IonContent>
    </IonPage>


  );
}

export default ResetPassword;
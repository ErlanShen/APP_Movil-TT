import React, { useState, FormEvent } from 'react';

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
  IonButtons,
  IonBackButton
} from "@ionic/react";

import { Link } from 'react-router-dom';



import './Form.css';

export const ResetPassword = () => {
  const [ email, setEmail ] = useState('');
  const [ formErrors, setFormErrors ] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

   /*  try {
      await resetPassword(email);
      setEmail('');
      alert('Password reset email sent');
    } catch (e) {
      setFormErrors(e.code);
    } */
  }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Reset Password</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="form">
      <form onSubmit={e => handleSubmit(e)} action="post">
        <IonList>
          <IonItem>
            <IonLabel  position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onInput={e => setEmail(e.currentTarget.value)} />
          </IonItem>
          <IonButton fill="clear"  type="submit">Reset Password</IonButton>
        </IonList>
      </form>
      <div className="below-form">
        <Link to='/login'>Back to login</Link>
      </div>
    </IonContent>
  </IonPage>
  );
}

export default ResetPassword;
import {
   IonBackButton,
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardTitle, IonHeader,
   IonItem, IonLabel,
   IonPage, IonTitle,
   IonToolbar
} from '@ionic/react';
import "./ExploreContainer.css"
import { Storage } from '@capacitor/storage';
import React, { useEffect, useState } from 'react';
export function Archivado() {

   const [enfoque, setEnfoque] = useState('');
   const [paradigma, setParadigma] = useState('');
   const [disenio, setDisenio] = useState('');
   const [subdisenio, setSubdisenio] = useState('');
   const [subdisenio2, setSubdisenio2] = useState('');
   const [nivel, setNivel] = useState('');

   const getRoot = async () => {
      const root = await Storage.get({ key: 'select-enfoque' });
      setEnfoque(root);
      const sp = await Storage.get({ key: 'selectParadigma' });
      setParadigma(sp);
      const sd = await Storage.get({ key: 'selectDisenio' });
      setDisenio(sd);
      const ssd = await Storage.get({ key: 'selectSubdisenio' });
      setSubdisenio(ssd);
      const ssd2 = await Storage.get({ key: 'selectSubdisenio2' });
      setSubdisenio2(ssd2);
      const n = await Storage.get({ key: 'selectNivel' });
      setNivel(n);
   }
   useEffect(() => {
      getRoot();
   }, []);

   return (
      <div>
         <IonPage id='fondoUnibe'>
            <IonHeader>
               <IonToolbar id='title-toolbar'>
                  <IonButtons  slot="start">
                     <IonBackButton />
                  </IonButtons>
                  <IonTitle><IonLabel>Rutas Metodológicas</IonLabel></IonTitle>
               </IonToolbar>
            </IonHeader>

            <IonCard className='container'>
            <IonCardHeader>
                  <IonCardTitle>
                     <h3>Naturaleza de investigación</h3>
                  </IonCardTitle>
               </IonCardHeader>

               <IonCardContent>
                  {enfoque.value == null ? '' : <IonItem><h3>Enfoque : {enfoque.value}</h3></IonItem>}
                  {paradigma.value == null ? '' : <IonItem><h3>Paradigma : {paradigma.value}</h3></IonItem>}
                  {disenio.value == null ? '' : <IonItem><h3>Diseño : {disenio.value}</h3> </IonItem>}
                  {subdisenio.value == null ? '' : <IonItem lines='none'><h3>Sub diseño : {subdisenio.value}</h3></IonItem>}
                  {subdisenio2.value == null ? '' : <IonItem> <h3>Sub diseño : {subdisenio2.value}</h3></IonItem>}
                  {nivel.value == null ? '' : <IonItem><h3>Nivel : {nivel.value}</h3></IonItem>}
               </IonCardContent>

            </IonCard>
         </IonPage>
      </div>
   );
};

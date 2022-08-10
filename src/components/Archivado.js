import {
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardTitle, IonContent, IonHeader,
   IonItem,
   IonMenuButton,
   IonPage, IonTitle,
   IonToolbar
} from '@ionic/react';
import "./ExploreContainer.css"
import { Storage } from '@capacitor/storage';
import React, { useEffect, useState } from 'react';
export function Archivado() {
   // seccion naturaleza de investigacion
   const [enfoque, setEnfoque] = useState('');
   const [paradigma, setParadigma] = useState('');
   const [disenio, setDisenio] = useState('');
   const [subdisenio, setSubdisenio] = useState('');
   const [subdisenio2, setSubdisenio2] = useState('');
   const [nivel, setNivel] = useState('');
   const [tipo, setTipo] = useState('');
   // seccion poblacion y muestra
   const [pym, setPyM] = useState('');

   const getRoot = async () => {
      // seccion naturaleza de investigacion
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
      const t = await Storage.get({ key: 'selectTipo' });
      setTipo(t);
      // seccion poblacion y muestra

      // si cargo el root, cargo los demas
      if (root.value) {
      }
   }
   //resetear los valores de los select una vez que se carga la pagina
   const reset = async () => {
      await Storage.set({ key: 'select-enfoque', value: null });
      await Storage.set({ key: 'selectParadigma', value: null });
      await Storage.set({ key: 'selectDisenio', value: null });
      await Storage.set({ key: 'selectSubdisenio', value: null });
      await Storage.set({ key: 'selectSubdisenio2', value: null });
      await Storage.set({ key: 'selectNivel', value: null });
      await Storage.set({ key: 'selectTipo', value: null });

   }
   useEffect(() => {
      getRoot();

   }, []);

   return (
      <div>
         <IonPage id='fondoUnibe'>
            <IonHeader>
               <IonToolbar id='title-toolbar'>
                  <IonButtons slot="start">
                     <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Rutas Metodológicas</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent >
               <ion-refresher slot="fixed" onIonRefresh={reset}>
                  <ion-refresher-content>
                  </ion-refresher-content>
               </ion-refresher>
               <div >
                  <IonCard class=''>
                     <IonCardHeader color='success'>
                        <IonCardTitle>
                           <h3>Naturaleza de investigación</h3>
                        </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent className='naturaleza'>
                        {enfoque.value == null ? '' : <IonItem><p>Enfoque : {enfoque.value}</p></IonItem>}
                        {paradigma.value == null ? '' : <IonItem><p>Paradigma : {paradigma.value}</p></IonItem>}
                        {disenio.value == null ? '' : <IonItem><p>Diseño : {disenio.value}</p> </IonItem>}
                        {subdisenio.value == null ? '' : <IonItem lines='none'><p>Sub diseño : {subdisenio.value}</p></IonItem>}
                        {subdisenio2.value == null ? '' : <IonItem> <p>Sub diseño : {subdisenio2.value}</p></IonItem>}
                        {nivel.value == null ? '' : <IonItem><p>Nivel : {nivel.value}</p></IonItem>}
                        {tipo.value == null ? '' : <IonItem><p>Tipo : {tipo.value}</p></IonItem>}
                     </IonCardContent>
                  </IonCard>

                  <IonCard hidden>
                     <IonCardHeader color='secondary'>
                        <IonCardTitle>
                           <h3>Poblacion y Muestra</h3>
                        </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent className='naturaleza'>

                       </IonCardContent>
                  </IonCard>
               </div>

            </IonContent>

         </IonPage>
      </div >
   );
};

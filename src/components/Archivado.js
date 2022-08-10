import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonPage } from '@ionic/react';
import './header';
import "./ExploreContainer.css"
import Header from './header';
import { Storage } from '@capacitor/storage';
import { useEffect, useState } from 'react';
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

      /* // dejar en blanco al salir de la pagina
      await Storage.set({ key: 'select-enfoque', value: '' });
      await Storage.set({ key: 'selectParadigma', value: '' });
      await Storage.set({ key: 'selectDisenio', value: '' });
      await Storage.set({ key: 'selectSubdisenio', value: '' });
      await Storage.set({ key: 'selectSubdisenio2', value: '' });
      await Storage.set({ key: 'selectNivel', value: '' });

    */

   }


   // cargar los datos al entrar a la pagina
   useEffect(() => {
      getRoot();
   }, []);


   return (
      <div>
         <IonPage id='fondoUnibe'>
            <Header />

            <IonContent >
               <IonCard >
                  <IonCardHeader color='success'>
                     <IonCardTitle>
                        <h3>Naturaleza de investigación</h3>
                     </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                     <div className='naturaleza'>
                        {enfoque.value == null ? '' : <IonItem><p>Enfoque : {enfoque.value}</p></IonItem>}
                        {paradigma.value == null ? '' : <IonItem><p>Paradigma : {paradigma.value}</p></IonItem>}
                        {disenio.value == null ? '' : <IonItem><p>Diseño : {disenio.value}</p> </IonItem>}
                        {subdisenio.value == null ? '' : <IonItem lines='none'><p>Sub diseño : {subdisenio.value}</p></IonItem>}
                        {subdisenio2.value == null ? '' : <IonItem> <p>Sub diseño : {subdisenio2.value}</p></IonItem>}
                        {nivel.value == null ? '' : <IonItem><p>Nivel : {nivel.value}</p></IonItem>}
                     </div>
                  </IonCardContent>

               </IonCard>

               
            </IonContent>

         </IonPage>
      </div>
   );
};

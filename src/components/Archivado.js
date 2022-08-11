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
import { useEffect, useState } from 'react';

/*  export const reset = async () => {
   await Storage.set({ key: 'select-enfoque', value: '' });
   await Storage.set({ key: 'selectParadigma', value: '' });
   await Storage.set({ key: 'selectDisenio', value: '' });
   await Storage.set({ key: 'selectSubdisenio', value: '' });
   await Storage.set({ key: 'selectSubdisenio2', value: '' });
   await Storage.set({ key: 'selectNivel', value: '' });
   await Storage.set({ key: 'selectTipo', value: '' });
   await Storage.set({ key: 'selectPyM', value: '' });
   await Storage.set({ key: 'selectTecnicaData', value: '' });
   await Storage.set({ key: 'selectTecnicaInfo', value: '' });
} */

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
   const [sujetosE, setSujetosE] = useState('');

   //seccion de tecnica de analisis de datos e informacion
   const [tecnicaData, setTecnicaData] = useState('');
   const [tecnicaInfo, setTecnicaInfo] = useState('');


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
      const pym = await Storage.get({ key: 'selectPyM' });
      setPyM(pym);
      const se = await Storage.get({ key: 'selectSujetosE' });
      setSujetosE(se);
      //seccion de tecnica de analisis de datos e informacion
      const tecnicaData = await Storage.get({ key: 'selectTecnicaData' });
      setTecnicaData(tecnicaData);
      const tecnicaInfo = await Storage.get({ key: 'selectTecnicaInfo' });
      setTecnicaInfo(tecnicaInfo);

      // si cargo el root, cargo los demas
      if (root.value) {
      }
   }
   //resetear los valores de los select una vez que se carga la pagina
   
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
              {/*  <ion-refresher slot="fixed" onIonRefresh={reset}>
                  <ion-refresher-content>
                  </ion-refresher-content>
               </ion-refresher> */}
               <div className='container'>
                  <IonCard>
                     <IonCardHeader color='success'>
                        <IonCardTitle>
                           <h3>Naturaleza de investigación</h3>
                        </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent className='naturaleza'>
                        {enfoque.value === 'null' ? '' : <IonItem><p>Enfoque: {enfoque.value}</p></IonItem>}
                        {paradigma.value === 'null' ? '' : <IonItem><p>Paradigma: {paradigma.value}</p></IonItem>}
                        {/* {disenio.value === 'null' ? '' : <IonItem><p>Diseño: {disenio.value}</p> </IonItem>} */}
                        {disenio.value === 'null' ? '' :
                           <IonItem>
                              <p>Diseño: {disenio.value}{subdisenio.value === 'null' ? '' : <>, {subdisenio.value}</>}{subdisenio2.value === 'null' ? "" : <>, {subdisenio2.value}</>}</p>
                           </IonItem>
                        }
                        {/* {subdisenio.value === 'null' ? '' : <IonItem lines='none'><p>Sub diseño : {subdisenio.value}</p></IonItem>}
                        {subdisenio2.value === 'null' ? '' : <IonItem> <p>Sub diseño : {subdisenio2.value}</p></IonItem>} */}
                        {nivel.value === 'null' ? '' : <IonItem><p>Nivel : {nivel.value}</p></IonItem>}
                        {tipo.value === 'null' ? '' : <IonItem><p>Tipo : {tipo.value}</p></IonItem>}
                        {sujetosE.value === 'null' ? '' : <IonItem><p>Sujetos de Estudio: {sujetosE.value}</p></IonItem>}

                     </IonCardContent>
                  </IonCard>
                  {/* cuantitativo */}
                  {pym.value === 'null' ? <IonCard hidden /> : 
                     <IonCard >
                        <IonCardHeader color='secondary'>
                           <IonCardTitle>
                              <h3>Población y Muestra</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className='naturaleza'>
                           <IonItem>
                              <p>Fórmula: {pym.value}</p>
                           </IonItem>
                        </IonCardContent>
                     </IonCard>
                  }
                 
                  {tecnicaData.value === 'null' ? <IonCard hidden /> : 
                     <IonCard >
                        <IonCardHeader color='warning'>
                           <IonCardTitle>
                              <h3>Técnica de recolección de datos</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className='naturaleza'>
                           <IonItem><p>Intrumento: {tecnicaData.value}</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  }

                  {tecnicaInfo.value === 'null' ? <IonCard hidden /> : (
                     <IonCard >
                        <IonCardHeader color='warning'>
                           <IonCardTitle>
                              <h3>Técnica de recolección de información</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent className='naturaleza'>
                           <IonItem><p>Intrumento: {tecnicaInfo.value}</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  )}
                  
               </div>
            </IonContent>
         </IonPage>
      </div >
   );
};

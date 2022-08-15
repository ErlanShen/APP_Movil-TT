import {
   IonButton,
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardTitle, IonContent, IonHeader,
   IonIcon,
   IonItem,
   IonLoading,
   IonMenuButton,
   IonPage, IonTitle,
   IonToolbar
} from '@ionic/react';
import "./ExploreContainer.css"
import { Storage } from '@capacitor/storage';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { menuOutline, menuSharp, refreshCircleOutline, refreshCircleSharp } from 'ionicons/icons';


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
   const [sujetosI, setSujetosI] = useState('');

   //seccion de tecnica de analisis de datos e informacion
   const [tecnicaData, setTecnicaData] = useState('');
   const [instrumet, setInstrumet] = useState('');
   const [validez, setValidez] = useState('');
   const [confiabilidad, setConfiabilidad] = useState('');
   const [tecnicaInfo, setTecnicaInfo] = useState('');
   const [tecnicAnalisis, setTecnicAnalisis] = useState('');

   const getRoot = async (e) => {
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
      const sDeEstudio = await Storage.get({ key: 'selectSujetosI' });
      setSujetosI(sDeEstudio);

      //seccion de tecnica de analisis de datos e informacion
      const tecnicaData = await Storage.get({ key: 'selectTecnicaData' });
      setTecnicaData(tecnicaData);
      const instrumet = await Storage.get({ key: 'selectInstrumet' });
      setInstrumet(instrumet);
      const validez = await Storage.get({ key: 'selectValidez' });
      setValidez(validez);
      const confiabilidad = await Storage.get({ key: 'selectConfiabilidad' });
      setConfiabilidad(confiabilidad);

      const tecnicaInfo = await Storage.get({ key: 'selectTecnicaInfo' });
      setTecnicaInfo(tecnicaInfo);
      const tecnicAnalisis = await Storage.get({ key: 'selectTecnicAnalisis' });
      setTecnicAnalisis(tecnicAnalisis);


   }
   //resetear los valores de los select una vez que se carga la pagina explorecontainer


   const [busy, setBusy] = useState(false);
   const history = useHistory();
   const clearState = async () => {
      setBusy(true);
      await Storage.clear();
      setTimeout(() => {
         setBusy(false);
         history.push('/explorecontainer');
      }, 2000);
   }
   useEffect(() => {
      getRoot()
   }, []);

   return (

      <div>
         <IonLoading message={"Porfavor espere..."} duration={0} isOpen={busy} />
         <IonPage id='fondoUnibe'>
            <IonHeader>
               <IonToolbar id='title-toolbar'>
                  <IonButtons slot="start">
                     <IonMenuButton >
                        <IonIcon icon={menuOutline || menuSharp} size='large' color='light' />
                     </IonMenuButton>
                  </IonButtons>
                  <IonTitle>Rutas Metodológicas</IonTitle>
               </IonToolbar>
            </IonHeader>
            <IonContent >
               {/*  <ion-refresher slot="fixed" onIonRefresh={reset}>
                  <ion-refresher-content>
                  </ion-refresher-content>
               </ion-refresher> */}
               <div>
                  <IonCard className='maturaleza'>
                     <IonCardHeader color='success'>
                        <IonCardTitle>
                           <h3>Naturaleza de investigación</h3>
                        </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent>
                        {enfoque.value == null || enfoque.value === "null" ? '' : <IonItem><p>Enfoque: {enfoque.value}</p></IonItem>}
                        {paradigma.value == null || paradigma.value === 'null' || paradigma.value === 'null' ? '' : <IonItem><p>Paradigma: {paradigma.value}</p></IonItem>}
                        {/* {disenio.value == null || disenio.value === 'null' ? '' : <IonItem><p>Diseño: {disenio.value}</p> </IonItem>} */}
                        {disenio.value == null || disenio.value === 'null' ? '' :
                           <IonItem>
                              <p>Diseño: {disenio.value}{subdisenio.value == null || subdisenio.value === 'null' ? '' : <>, {subdisenio.value}</>}{subdisenio2.value == null || subdisenio2.value === 'null' ? "" : <>, {subdisenio2.value}</>}</p>
                           </IonItem>
                        }
                        {nivel.value == null || nivel.value === 'null' ? '' : <IonItem><p>Nivel : {nivel.value}</p></IonItem>}
                        {tipo.value == null || tipo.value === 'null' ? '' : <IonItem><p>Tipo : {tipo.value}</p></IonItem>}

                     </IonCardContent>
                  </IonCard>
                  {/* cuantitativo */}
                  {pym.value == null || pym.value === 'null' ? <IonCard hidden /> :
                     <IonCard className='naturaleza'>
                        <IonCardHeader color='secondary'>
                           <IonCardTitle>
                              <h3>Población y Muestra</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                           <IonItem>
                              <p>Fórmula: {pym.value}</p>
                           </IonItem>
                           <IonItem><p>Intrumento: {tecnicaData.value}</p></IonItem>
                           <IonItem><p>Validez: {validez.value}</p></IonItem>
                           <IonItem><p>Confiabilidad: {confiabilidad.value}</p></IonItem>
                           <IonItem><p>Técnica de análisis de datos</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  }

                  {tecnicaData.value == null || tecnicaData.value === 'null' ? <IonCard hidden /> :
                     <IonCard className='naturaleza'>
                        <IonCardHeader color='warning'>
                           <IonCardTitle>
                              <h3>Técnica de recolección de datos</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                           <IonItem><p>Tecnica: {tecnicaData.value}</p></IonItem>
                           <IonItem><p>Intrumento: {instrumet.value}</p></IonItem>
                           <IonItem><p>Validez: {validez.value}</p></IonItem>
                           <IonItem><p>Confiabilidad: {confiabilidad.value}</p></IonItem>
                           <IonItem><p>Técnica de análisis de datos</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  }

                  {sujetosI.value == null || sujetosI.value === 'null' ? <IonCard hidden /> :
                     <IonCard className='naturaleza'>
                        <IonCardHeader color='secondary'>
                           <IonCardTitle>
                              <h3>Sujetos de Estudio: </h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                           <IonItem>
                              <p>{sujetosI.value}</p>
                           </IonItem>
                        </IonCardContent>
                     </IonCard>
                  }
                  {tecnicaInfo.value == null || tecnicaInfo.value === 'null' ? <IonCard hidden /> : (
                     <IonCard className='naturaleza'>
                        <IonCardHeader color='warning'>
                           <IonCardTitle>
                              <h3> Técnica de recolección de información</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                           <IonItem><p>Intrumento: {tecnicaInfo.value}</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  )}
                  {tecnicAnalisis.value == null || tecnicAnalisis.value === 'null' ? <IonCard hidden /> : (
                     <IonCard className='naturaleza'>
                        <IonCardHeader color='tertiary'>
                           <IonCardTitle>
                              <h3>Validez:</h3>
                           </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                           <IonItem><p>Técnica de análisis de información: {tecnicAnalisis.value}</p></IonItem>
                        </IonCardContent>
                     </IonCard>
                  )}

               </div>
               <div id='buttoncenter'>
                  <IonButton onClick={clearState}>
                     <IonIcon icon={refreshCircleOutline || refreshCircleSharp} />
                     Empezar de nuevo
                  </IonButton>
               </div>
            </IonContent>
         </IonPage>
      </div >
   );
};

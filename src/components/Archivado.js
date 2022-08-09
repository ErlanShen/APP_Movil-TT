import { IonCard, IonPage } from '@ionic/react';
import './header';
import "./ExploreContainer.css"
import Header from './header';
import { Storage } from '@capacitor/storage';
import { useEffect, useState } from 'react';
export function Archivado() {

   const [enfoque, setEnfoque] = useState('');
   const [paradigma, setParadigma] = useState('');
   const [disenio, setDisenio] = useState('');

   const getRoot = async () => {
      const root = await Storage.get({ key: 'select-enfoque' });
      setEnfoque(root);
      const sp = await Storage.get({ key: 'selectParadigma' });
      setParadigma(sp);
      const sd = await Storage.get({ key: 'selectDisenio' });
      setDisenio(sd);
   }
   useEffect(() => {
      getRoot();
   }, []);

   return (
      <div>
         <IonPage id='fondoUnibe'>
            <Header />
            <IonCard className='container'>
               <h1>Naturaleza de investigación</h1>
               {enfoque.value == null? '' : <h2>Enfoque : {enfoque.value}</h2>}
               {paradigma.value == null ? '' : <h2>Paradigma : {paradigma.value}</h2>}
               {disenio.value == null ? '' : <h2>Disenio : {disenio.value}</h2>}
            </IonCard>
         </IonPage>
      </div>
   );
};

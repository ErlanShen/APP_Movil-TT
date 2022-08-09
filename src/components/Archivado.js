import { IonCard, IonPage } from '@ionic/react';
import './header';
import "./ExploreContainer.css"
import Header from './header';
import { Storage } from '@capacitor/storage';
import React, { useEffect, useState } from 'react';
export function Archivado() {

   const [enfoque, setEnfoque] = useState('');
   const [paradigma, setParadigma] = useState('');
   const [disenio, setDisenio] = useState('');

   const getRoot = async () => {
      const root = await Storage.get({ key: 'select-enfoque' });
      setEnfoque(root);
      const root2 = await Storage.get({ key: 'selectParagima' });
      setParadigma(root2);
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
            </IonCard>
         </IonPage>
      </div>
   );
};

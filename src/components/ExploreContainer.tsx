import { IonButton } from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../database/firebaseConfig';
import './ExploreContainer.css';
import { useAuth } from '../context/authContext';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

 
  const db = firestore;
  const dataArray = Array<any>();
  const [data, setData] = useState(Array<any>());
  const [one, setOne] = useState({});
  // metodo para obtener los datos de firebase por id
  const fireStoreFunction = async () => {
    const collectionDB = collection(db, 'Datos-Contenido');
    return await getDocs(collectionDB);
  }
  // metodo para obtener los datos de firebase por id
  const dataExtract = async () => {
    const data = await fireStoreFunction();
    data.forEach(element => {
      const fire = element.data();
      if (fire.titulo === "Enfoque") setOne(element.data());
      dataArray.push(element.data());
    })
    setData(dataArray);
  }
  useEffect(() => {
    let isMounted = true;
    dataExtract();
    return () => {
      isMounted = false
    }
  },[]);

  
  return (
    <div className="container">
      <strong>Bienvenidos</strong>
      <hr />
      <p>Esta aplicación te ayuda a crear tu ruta metodológica para el desarrollo de trabajos de investigación</p>
      <hr />
      <p>Para empezar, selecciona una opción del menú</p>
      <hr />
      <IonButton routerLink='/home/'>Empecemos</IonButton>
    </div>
  );
};

export default ExploreContainer;

import { IonButton } from '@ionic/react';
import IPageProps from '../models/page.interface';
import './ExploreContainer.css';


const ExploreContainer: React.FC<IPageProps> = ({name}) => {
  return (
    <div className="container">
      <strong>Bienvenidos</strong>
      <hr />
      <div>
        <p>Esta aplicación te ayuda a crear tu ruta metodológica para el desarrollo de trabajos de investigación</p>
      <hr />
      <p>Para empezar, selecciona una opción del menú</p>
      </div>
      <hr />
      <IonButton routerLink='/home/'>Empecemos</IonButton>
    </div>
  );
};

export default ExploreContainer;

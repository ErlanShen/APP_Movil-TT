import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
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

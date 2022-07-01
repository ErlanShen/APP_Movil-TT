import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>Bienvenidos</strong>
      <hr />
      <p>Esta aplicacion te ayuda a crear tu ruta medologigica para el desarrollo de trabajos de investigacion</p>
      <hr />
      <p>Para empezar, selecciona una opcion del menu</p>
    </div>
  );
};

export default ExploreContainer;

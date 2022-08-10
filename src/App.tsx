import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';


/* Router */
import Menu from './components/Menu';
import Login from './Authenticate/Login';
import Register from './Authenticate/Register';
import ResetPassword from './Authenticate/ResetPassword';
import Home from './pages/Home/Home';
import Cualitativo from './pages/Rutas-Metodologicas/Enfoque/Cualitativo';
import Cuantitativo from './pages/Rutas-Metodologicas/Enfoque/Cuantitativo';
import Positivista from './pages/Rutas-Metodologicas/Paradigma/Positivista';
import Interpretativo from './pages/Rutas-Metodologicas/Paradigma/Interpretativo';
import SocioCritico from './pages/Rutas-Metodologicas/Paradigma/Socio-Crítico';
import SocioContruccionista from './pages/Rutas-Metodologicas/Paradigma/Socio-Construccionista';
import Experimental from './pages/Rutas-Metodologicas/Diseño/Experimental/Experimental';
import NoExperimental from './pages/Rutas-Metodologicas/Diseño/NoExperimental/No experimental';
import Explicativo from './pages/Rutas-Metodologicas/Nivel/Explicativo';
import Descriptivo from './pages/Rutas-Metodologicas/Nivel/Descriptivo';
import Correlacional from './pages/Rutas-Metodologicas/Nivel/Correlacional';
import Exploratorio from './pages/Rutas-Metodologicas/Nivel/Exploratorio';
import Cuasiexperimentos from './pages/Rutas-Metodologicas/Diseño/Experimental/Cuasiexperimentos';
import Experimentospuros from './pages/Rutas-Metodologicas/Diseño/Experimental/Experimentos-puros';
import Preexperimento from './pages/Rutas-Metodologicas/Diseño/Experimental/Preexperimento';
import Transaccional from './pages/Rutas-Metodologicas/Diseño/NoExperimental/Transaccional';
import EstudiodeCaso from './pages/Rutas-Metodologicas/Diseño/Cualitativo/EstudiodeCaso';
import Etnográfico from './pages/Rutas-Metodologicas/Diseño/Cualitativo/Etnográfico';
import Fenomenológico from './pages/Rutas-Metodologicas/Diseño/Cualitativo/Fenomenológico';
import Hermenéutico from './pages/Rutas-Metodologicas/Diseño/Cualitativo/Hermenéutico';
import Teoriafundamentada from './pages/Rutas-Metodologicas/Diseño/Cualitativo/teoriafundamentada';
import Narrativo from './pages/Rutas-Metodologicas/Diseño/Cualitativo/narrativo';
import Tendencia from './pages/Rutas-Metodologicas/Diseño/NoExperimental/Tendencia';
import Panel from './pages/Rutas-Metodologicas/Diseño/NoExperimental/Panel';
import EvoluciondeGrupo from './pages/Rutas-Metodologicas/Diseño/NoExperimental/EvoluciondeGrupo';
import Longitudinal from './pages/Rutas-Metodologicas/Diseño/NoExperimental/Longitudinal';
import Campo from './pages/Rutas-Metodologicas/Tipo/Campo';
import Documental from './pages/Rutas-Metodologicas/Tipo/Documental';
import { ProtectedRouter } from './context/ProtectedRouter';
import ExploreContainer from './components/ExploreContainer';
import AccionParticipativa from './pages/Rutas-Metodologicas/Diseño/Cualitativo/AccionParticipativa';
import Muestra from './pages/Rutas-Metodologicas/PoblacionyMuestra/PobyMuest';
import MuestraFinita from './pages/Rutas-Metodologicas/PoblacionyMuestra/Muestra/MuestraFinita';
import MuestraInfinita from './pages/Rutas-Metodologicas/PoblacionyMuestra/Muestra/MuestraInfinita';
import Tecnica from './pages/Rutas-Metodologicas/TecnicaRecoleccionDatos/Tecnica';
import Instrumento from './pages/Rutas-Metodologicas/TecnicaRecoleccionDatos/Instrumento';
import TecnicaRec from './pages/Rutas-Metodologicas/TecnicasRecoleccionInformacion/TecnicaRec';
import Entrevista from './pages/Rutas-Metodologicas/TecnicasRecoleccionInformacion/Entrevista';
import GuiondeEntrevista from './pages/Rutas-Metodologicas/TecnicasRecoleccionInformacion/GuionEntrevista';
import GruposFocales from './pages/Rutas-Metodologicas/TecnicasRecoleccionInformacion/GruposFocales';
import Observacion from './pages/Rutas-Metodologicas/TecnicasRecoleccionInformacion/Observacion';
import Categorizacion from './pages/Rutas-Metodologicas/TecnicaAnalisisInformacion/Categorizacion';
import Codificacion from './pages/Rutas-Metodologicas/TecnicaAnalisisInformacion/Codificacion';
import Triangulacion from './pages/Rutas-Metodologicas/TecnicaAnalisisInformacion/Triangulacion';
import AnalisisInformacion from './pages/Rutas-Metodologicas/TecnicaAnalisisInformacion/AnalisisInformacion';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
          <IonApp>
            <IonReactRouter>
              <IonSplitPane contentId="main">
                <ProtectedRouter>
                  <Menu />
                </ProtectedRouter>

                <IonRouterOutlet id="main">
                  <Route path="">
                    <Redirect to="/exploreContainer" />
                  </Route>
                  <Route path="/login">
                      <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/reset-password">
                    <ResetPassword />
                  </Route>

                  <Route path="/home">
                    <ProtectedRouter>
                      <Home />
                    </ProtectedRouter>
                  </Route>
                  <Route path="/cualitativo">
                    <Cualitativo />
                  </Route>

                  <Route path="/cuantitativo">
                    <Cuantitativo />
                  </Route>

                  <Route path="/positivista">
                    <Positivista />
                  </Route>

                  <Route path="/interpretativo">
                    <Interpretativo />
                  </Route>

                  <Route path="/sociocrítico">
                    <SocioCritico />
                  </Route>

                  <Route path="/socio-construccionista">
                    <SocioContruccionista />
                  </Route>

                  <Route path="/experimental">
                    <Experimental />
                  </Route>

                  <Route path="/no-experimental">
                    <NoExperimental />
                  </Route>

                  <Route path="/correlacional">
                    <Correlacional />
                  </Route>

                  <Route path="/descriptivo">
                    <Descriptivo />
                  </Route>

                  <Route path="/explicativo">
                    <Explicativo />
                  </Route>

                  <Route path="/exploratorio">
                    <Exploratorio />
                  </Route>

                  <Route path="/transaccional">
                    <Transaccional />
                  </Route>

                  <Route path="/longitudinal">
                    <Longitudinal />
                  </Route>

                  <Route path="/cuasiexperimentos">
                    <Cuasiexperimentos />
                  </Route>

                  <Route path="/experimentospuros">
                    <Experimentospuros />
                  </Route>

                  <Route path="/preexperimento">
                    <Preexperimento />
                  </Route>

                  <Route path="/estudiodecaso">
                    <EstudiodeCaso />
                  </Route>

                  <Route path="/etnográfico">
                    <Etnográfico />
                  </Route>

                  <Route path="/fenomenológico">
                    <Fenomenológico />
                  </Route>


                  <Route path="/hermenéutico">
                    <Hermenéutico />
                  </Route>

                  <Route path="/teoriafundamentada">
                    <Teoriafundamentada />
                  </Route>

                  <Route path="/narrativo">
                    < Narrativo />
                  </Route>

                  <Route path="/tendencia">
                    < Tendencia />
                  </Route>

                  <Route path="/panel">
                    < Panel />
                  </Route>

                  <Route path="/evoluciondegrupo">
                    < EvoluciondeGrupo />
                  </Route>

                  <Route path="/campo">
                    < Campo />
                  </Route>

                  <Route path="/documental">
                    < Documental />
                  </Route>

                  <Route path="/accionParticipativa">
                    <AccionParticipativa />
                  </Route>

                  <Route path="/muestra">
                    <Muestra />
                  </Route>

                  <Route path="/Muestra Finita">
                    <MuestraFinita />
                  </Route>

                  <Route path="/Muestra Infinita">
                    <MuestraInfinita />
                  </Route>

                  <Route path="/Tecnica">
                    <Tecnica />
                  </Route>

                  <Route path="/Instrumento">
                    <Instrumento />
                  </Route>

                  <Route path="/Tecnica de Recoleccion de datos">
                    <TecnicaRec />
                  </Route>

                  <Route path="/Entrevista">
                    <Entrevista />
                  </Route>

                  <Route path="/Guion de Entrevista">
                    <GuiondeEntrevista />
                  </Route>

                  <Route path="/Grupos Focales">
                    <GruposFocales />
                  </Route>

                  <Route path="/Observacion">
                    <Observacion />
                  </Route>

                  <Route path="/Analisis de Información">
                    <AnalisisInformacion />
                  </Route>

                  <Route path="/Codificación">
                    <Codificacion />
                  </Route>

                  <Route path="/Categorización">
                    <Categorizacion />
                  </Route>

                  <Route path="/Triangulación">
                    <Triangulacion />
                  </Route>



                  <Route path="/exploreContainer">
                    <ExploreContainer />
                  </Route>

                </IonRouterOutlet>
              </IonSplitPane>
            </IonReactRouter>
          </IonApp>
      </AuthProvider>
    </div>

  );
};



export default App;


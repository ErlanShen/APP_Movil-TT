import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';


/* Router */
import Menu from './components/Menu';
import Page from './pages/Page';
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
import FunciondelTiempo from './pages/Rutas-Metodologicas/Diseño/NoExperimental/FunciondelTiempo';
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
import Campo from './pages/Rutas-Metodologicas/Tipo/Campo';
import Documental from './pages/Rutas-Metodologicas/Tipo/Documental';
import { ProtectedRouter } from './context/ProtectedRouter';

setupIonicReact();

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main" >

              <Menu />
              <IonRouterOutlet id="main">
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/reset-password">
                  <ResetPassword />
                </Route>

                <Route path="">
                  <ProtectedRouter>
                    <Redirect to="/home"/>
                  </ProtectedRouter>
                </Route>
                <Route path="/home">
                  <ProtectedRouter>
                    <Home />
                  </ProtectedRouter>
                </Route>

                <Route path="/cualitativo">
                  <ProtectedRouter>
                    <Cualitativo />
                  </ProtectedRouter>
                </Route>

                <Route path="/cuantitativo">
                  <ProtectedRouter>
                    <Cuantitativo />
                  </ProtectedRouter>
                </Route>

                <Route path="/positivista">
                  <ProtectedRouter>
                    <Positivista />
                  </ProtectedRouter>
                </Route>

                <Route path="/interpretativo">
                  <ProtectedRouter>
                    <Interpretativo />
                  </ProtectedRouter>
                </Route>

                <Route path="/sociocrítico">
                  <ProtectedRouter>
                    <SocioCritico />
                  </ProtectedRouter>
                </Route>

                <Route path="/socio-construccionista">
                  <ProtectedRouter>
                    <SocioContruccionista />
                  </ProtectedRouter>
                </Route>

                <Route path="/experimental">
                  <ProtectedRouter>
                    <Experimental />
                  </ProtectedRouter>
                </Route>

                <Route path="/no-experimental">
                  <ProtectedRouter>
                    <NoExperimental />
                  </ProtectedRouter>
                </Route>

                <Route path="/funciondelTiempo">
                  <ProtectedRouter>
                    <FunciondelTiempo />
                  </ProtectedRouter>
                </Route>

                <Route path="/correlacional">
                  <ProtectedRouter>
                    <Correlacional />
                  </ProtectedRouter>
                </Route>

                <Route path="/descriptivo">
                  <ProtectedRouter>
                    <Descriptivo />
                  </ProtectedRouter>
                </Route>

                <Route path="/explicativo">
                  <ProtectedRouter>
                    <Explicativo />
                  </ProtectedRouter>
                </Route>

                <Route path="/exploratorio">
                  <ProtectedRouter>
                    <Exploratorio />
                  </ProtectedRouter>
                </Route>


                <Route path="/transaccional">
                  <ProtectedRouter>
                    <Transaccional />
                  </ProtectedRouter>
                </Route>

                <Route path="/longitudinal">
                  <ProtectedRouter>
                    <Longitudinal />
                  </ProtectedRouter>
                </Route>

                <Route path="/cuasiexperimentos">
                  <ProtectedRouter>
                    <Cuasiexperimentos />
                  </ProtectedRouter>
                </Route>

                <Route path="/experimentospuros">
                  <ProtectedRouter>
                    <Experimentospuros />
                  </ProtectedRouter>
                </Route>

                <Route path="/preexperimento">
                  <ProtectedRouter>
                    <Preexperimento />
                  </ProtectedRouter>
                </Route>

                <Route path="/estudiodecaso">
                  <ProtectedRouter>
                    <EstudiodeCaso />
                  </ProtectedRouter>
                </Route>

                <Route path="/etnográfico">
                  <ProtectedRouter>
                    <Etnográfico />
                  </ProtectedRouter>
                </Route>

                <Route path="/fenomenológico">
                  <ProtectedRouter>
                    <Fenomenológico />
                  </ProtectedRouter>
                </Route>


                <Route path="/hermenéutico">
                  <ProtectedRouter>
                    <Hermenéutico />
                  </ProtectedRouter>
                </Route>

                <Route path="/teoriafundamentada">
                  <ProtectedRouter>
                    <Teoriafundamentada />
                  </ProtectedRouter>
                </Route>

                <Route path="/narrativo">
                  <ProtectedRouter>
                    < Narrativo />
                  </ProtectedRouter>
                </Route>

                <Route path="/tendencia">
                  <ProtectedRouter>
                    < Tendencia />
                  </ProtectedRouter>
                </Route>

                <Route path="/panel">
                  <ProtectedRouter>
                    < Panel />
                  </ProtectedRouter>
                </Route>

                <Route path="/evoluciondegrupo">
                  <ProtectedRouter>
                    < EvoluciondeGrupo />
                  </ProtectedRouter>
                </Route>

                <Route path="/campo">
                  <ProtectedRouter>
                    < Campo />
                  </ProtectedRouter>
                </Route>

                <Route path="/documental">
                  <ProtectedRouter>
                    < Documental />
                  </ProtectedRouter>
                </Route>

                <Route path="/page/:name">
                  <ProtectedRouter>
                    <Page />
                  </ProtectedRouter>
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


import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Router */
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './Authenticate/Login';
import Register from './Authenticate/Register';
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
import { AuthProvider } from './context/authContext';
import Transaccional from './pages/Rutas-Metodologicas/Diseño/NoExperimental/Transaccional';




setupIonicReact();

const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <IonApp>
          <IonReactRouter>
          <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="">
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/home">
              <Home />
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
              <SocioCritico/>
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

            <Route path="/funciondelTiempo">
              <FunciondelTiempo />
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

            <Route path="/cuasiexperimentos">
              <Cuasiexperimentos />
            </Route>

            <Route path="/experimentospuros">
              <Experimentospuros />
            </Route>

            <Route path="/preexperimento">
              <Preexperimento />
            </Route>
            <Route path="/page/:name">
              <Page />
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


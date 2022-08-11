import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
  IonToggle,
  useIonToast,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, homeOutline, homeSharp, logOutOutline, logOutSharp, moon, paperPlaneOutline, paperPlaneSharp, powerOutline, powerSharp } from 'ionicons/icons';
import { useAuth } from '../context/authContext';
import { useState } from 'react';
import './Menu.css';
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/exploreContainer',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Rutas Metodologicas',
    url: '/home',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Archivados',
    url: '/archivado',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },

];

/* const labels = ['Notes', 'Reminders']; */

const Menu: React.FC = () => {

  const { logOutUser, user } = useAuth();
  const location = useLocation();
  const [busy, setBusy] = useState(false);
  const handleLogOut = async () => {
    setBusy(true);
    try {
      await logOutUser();
      setBusy(false);
      toast('ha cerrado sesión!', 'light')
    } catch (error) {
      toast('Fallo al cerrar sesión', 'danger')
      setBusy(false);
    }
  }
  const [present, dismiss] = useIonToast();
    const toast = (message: string, color? : string) => present({
    buttons: [{ text: 'hide', handler: () => dismiss() }],
    message: message,
    duration: 2000,
    position: 'bottom',
    color: color ? color : 'warning',
    animated: true,
  })
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bienvenido</IonListHeader>
          <hr />
          <IonNote>{user.email}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="labels-list">
          <IonItem>
            <IonIcon
              slot="start" icon={moon} className="component-icon component-icon-dark" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className='footer'>
          <div id='buttoncenter'>
            <IonButton color="danger" shape="round" size='large' onClick={handleLogOut} id="buttoncenter" >
              <IonIcon icon={logOutSharp || logOutOutline} size='large' slot="start" color='light'/>
              Cerrar sesión
            </IonButton>
          </div>
      </IonFooter>
      {/* Componenete loading */}
      <IonLoading message={"Porfavor espere..."} duration={2000} isOpen={busy} />
    </IonMenu>
  );
};

export default Menu;

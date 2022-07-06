import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp } from 'ionicons/icons';
import './Menu.css';
import { useAuth } from '../context/authContext';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/home',
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
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: '/page/Trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },

];

const labels = ['Notes', 'Reminders'];



const Menu: React.FC = () => {

  const { logOutUser, loading } = useAuth( );
  const location = useLocation();
  const history = useHistory();
  const handleLogOut = async () => {
    await logOutUser();
    history.push('/login');
  }

  if (loading) {
    return <div className="container"><strong>Loading...</strong></div>;
  }



  return (

    <IonMenu contentId="main" type="overlay">
      <IonContent>

        <IonList id="inbox-list">
          <IonListHeader>Bienvenido</IonListHeader>
          {/* <IonNote> {user.displayName}</IonNote>
          <IonNote> {user.email}</IonNote> */}
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
          <IonListHeader>Recientes</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonList >
          <IonButton color="primary" shape="round" onClick={handleLogOut}>Cerrar sesion</IonButton>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

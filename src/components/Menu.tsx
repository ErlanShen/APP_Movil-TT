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
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonToggle,
} from '@ionic/react';

import { useLocation, useHistory } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, moon, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import './Menu.css';
import { useAuth } from '../context/authContext';
import { useState } from 'react';

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
    title: 'Favoritos',
    url: '/page/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archivados',
    url: '/page/Archived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },

];

const labels = ['Notes', 'Reminders'];

const Menu: React.FC = () => {

  const { logOutUser, loading, user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleLogOut = async () => {
    await logOutUser();
    history.push('/login');
    setRefreshing(refreshing => !refreshing);
    onRefresh();
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  }


  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };


  if (loading) {
    return <IonLoading message={"Porfavor espere..."} duration={0} isOpen={true} />;
  }

  return (

    <IonMenu contentId="main" type="overlay">
      <IonContent>

        <IonList id="inbox-list">
          <IonListHeader>Bienvenido</IonListHeader>
          {/* <IonNote>{user.displayName}</IonNote>
          <IonNote>{user.email}</IonNote> */}
          <hr />
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

        <IonList>

          <IonItem>
            <IonIcon
              slot="start" icon={moon} className="component-icon component-icon-dark" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>

      </IonFooter>
      <IonFooter>
        <IonRow class='space'>
          <IonCol/>
          <IonCol size='8'>
            <IonButton color="danger" fill='outline' size='large' shape="round" onClick={handleLogOut} id="buttoncenter" >Cerrar sesion</IonButton>
          </IonCol>
          <IonCol/>
        </IonRow>
      </IonFooter>
    </IonMenu>
  );
};
<IonRefresher slot="fixed">
  <IonRefresherContent />
</IonRefresher>

export default Menu;

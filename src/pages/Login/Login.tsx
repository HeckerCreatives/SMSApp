import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import LoginComponent from '../../components/login/login';
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Login;

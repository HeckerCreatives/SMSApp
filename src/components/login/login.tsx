import React from 'react';
import { IonInput, IonItem, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import "./login.css"
interface ContainerProps { }

const LoginComponent: React.FC<ContainerProps> = () => {
    const login = () => {
        window.location.href = "/dashboard"
    }
  return (
    <div id="container">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Login Your Account</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
      <IonItem>
        <IonInput label="Username" type='text'></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Password" type='password'></IonInput>
      </IonItem>
      <IonButton onClick={() => login} routerLink="/dashboard">Login</IonButton>
      </IonCardContent>
    </IonCard>
    </div>
  );
};

export default LoginComponent;
import React, { useEffect, useState } from 'react';
import { IonInput, IonItem, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonToast} from '@ionic/react';
import "./login.css"
interface ContainerProps { }

const LoginComponent: React.FC<ContainerProps> = () => {
  const auth = JSON.parse(localStorage.getItem("auth"))
  useEffect(()=>{
    if(auth){
      
      window.location.href = `/dashboard/${auth.role?.role}`
    } 
  },[auth])

  const [present] = useIonToast();
    const login = (e:any) => {
      e.preventDefault()
      const {username, password} = e.target
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        })
      })
      .then(result => result.json())
      .then(data => {
        if(data.message === "success"){
          localStorage.setItem('auth', JSON.stringify(data.data))
          present({
            message: data.message,
            duration: 3000,
            position: "bottom",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
        } else {
          present({
            message: "please check your username and password",
            duration: 5000,
            position: "bottom",
          })
        }
      })
    }
    
  return (
    <div id="container">
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Login Your Account</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <form onSubmit={login}>
      <IonItem>
        <IonInput name='username' label="Username" type='text' required></IonInput>
      </IonItem>
      <IonItem>
        <IonInput name='password' label="Password" type='password' required></IonInput>
      </IonItem>
      <IonButton type='submit'>Login</IonButton>
      </form>
      </IonCardContent>
    </IonCard>
    </div>
  );
};

export default LoginComponent;
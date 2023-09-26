import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader, useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
const AdminSettingsQuarter: React.FC = () => {
  const [present] = useIonToast();
  const [quarter, setQuarter] = useState("")

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}quarter/find`)
    .then(result => result.json())
    .then(data => {
      setQuarter(data.data.quarter)
    })
  },[])

  const addquater = (e: any) => {
    e.preventDefault();
    const { quarter } = e.target;
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}quarter/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          quarter: quarter.value
        }
      )
    })
    .then(result => result.json())
    .then(data => {
      if(data.message === "success"){
        present({
          message: data.message,
          duration: 5000,
          position: "bottom",
        }).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
      } else {
        present({
          message: data.message,
          duration: 5000,
          position: "bottom",
        });
      }
    })
  }

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Administrator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Settings" text2="Quarter"/>
        <IonGrid>
        <IonRow>
         
          <IonCol className="col-4 offset-4">
            <IonCard style={{background: "#D56D34", textAlign: "center", color: "white"}}>
            
            <IonCardContent>
                <MDBTypography className="">Active Quarter</MDBTypography>
                <MDBTypography>{quarter}</MDBTypography>
            </IonCardContent>

            </IonCard>
            <form autoComplete="off" onSubmit={addquater}>
            <div className="d-flex justify-content-between m-3">
                <div>
                <MDBInput name="quarter" label="2023 Quarter 2"/>
                </div>
           
            <MDBBtn type="submit"> Save </MDBBtn>
            </div>
            </form>
            
            
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    )
}

export default AdminSettingsQuarter;
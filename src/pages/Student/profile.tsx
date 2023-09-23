import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
const StudentProfile: React.FC = () => {
    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Student</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
            <div className="p-2 rounded fw-bold" style={{background: "#D1D4D6", color: "gray"}}>
            Profile Section
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
            <IonCardHeader>
                <IonCardTitle>Account Info</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">Username:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">Full Name:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">Year:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">Section:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="d-flex justify-content-end m-3">
                <MDBBtn> Save </MDBBtn>
                </div>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
            <IonCardHeader>
                <IonCardTitle>Manage Password</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">New Password:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="col-4 offset-4">
                <MDBTypography className="fw-bold">Confirm Password:</MDBTypography>
                <MDBInput/>
                </div>
                <div className="d-flex justify-content-end m-3">
                <MDBBtn> Save </MDBBtn>
                </div>
            </IonCardContent>

            </IonCard>
            
            
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    )
}

export default StudentProfile;
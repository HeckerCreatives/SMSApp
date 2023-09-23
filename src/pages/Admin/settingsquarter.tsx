import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
const AdminSettingsQuarter: React.FC = () => {
    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Administrator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
            <div className="p-2 rounded fw-bold" style={{background: "#D1D4D6", color: "gray"}}>
            Settings &gt; Quarter
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
        <IonRow>
         
          <IonCol className="col-4 offset-4">
            <IonCard style={{background: "#D56D34", textAlign: "center", color: "white"}}>
            
            <IonCardContent>
                <MDBTypography className="">Active Quarter</MDBTypography>
                <MDBTypography>2023 Quarter 2</MDBTypography>
            </IonCardContent>

            </IonCard>
            <div className="d-flex justify-content-between m-3">
                <div>
                <MDBInput label="2023 Quarter 2"/>
                </div>
           
            <MDBBtn> Save </MDBBtn>
            </div>
            
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    )
}

export default AdminSettingsQuarter;
import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
const AdminSettingsQuarter: React.FC = () => {
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
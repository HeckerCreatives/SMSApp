import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
const TeacherSms: React.FC = () => {
    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Teacher</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Manual SMS" text2=""/>
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard color="primary" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            Total Student at Risk
            <hr/>
            10,000
            </IonCardContent>

            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard color="warning" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            Class Advisory
            <hr/>
            10,000
            </IonCardContent>

            </IonCard>
          </IonCol>
        
        </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow>
                <IonCol>
                <MDBBtn className="ms-2">Send SMS</MDBBtn>
                </IonCol>
            </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
    )
}

export default TeacherSms;
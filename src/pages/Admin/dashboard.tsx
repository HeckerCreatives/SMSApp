import React from "react";
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCol, 
  IonGrid, 
  IonRow} from '@ionic/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { MDBTypography } from "mdb-react-ui-kit";
const AdminDashboard: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const data = {
    labels: ["Billable", "Non Billable"],
    datasets: [
      {
        label: "Billable Vs. Non Billable",
        backgroundColor: ["#36a2eb", "rgba(255,99,132,0.2)"],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59],
      },
    ],
  };
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
            Dashboard
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard color="primary" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Students</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard color="warning" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Teachers</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="success" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Subjects</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="danger" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Year and Section</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard style={{background: "#D534BB", textAlign: "center", color: "white"}} >

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Students</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard style={{background: "#D56D34", textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Total Teachers</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow>
          <IonCol>
          <IonCard >

          <IonCardContent>
          <Bar data={data}/>
          </IonCardContent>

          </IonCard>
            
          </IonCol>
        </IonRow>
      </IonGrid>

      </IonContent>
    </IonPage>
    )
}

export default AdminDashboard;
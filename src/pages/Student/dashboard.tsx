import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow,IonCardHeader,
  IonCardTitle} from '@ionic/react';
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
const StudentDashboard: React.FC = () => {
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
            <IonTitle>Student</IonTitle>
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
            <MDBTypography className="fw-bold ">Previous GWA</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard color="warning" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Highest Grade</MDBTypography>
            <hr/>
            
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="success" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Excelled Subject</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            
            </IonCardContent>

            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard color="danger" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Lowest Subject</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">10,000</MDBTypography>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        <IonGrid>
        <IonRow >
          <IonCol sizeLg="7" >
          <IonCard >

          <IonCardContent>
          <Bar data={data}/>
          </IonCardContent>

          </IonCard>
          
          </IonCol>

          <IonCol sizeLg="5">
          <IonCard>
          <IonCardHeader>
                <IonCardTitle>Current Grade List</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ overflowY: 'auto',maxHeight: '400px'}}>
          <IonCard color="danger" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">History</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          <IonCard color="primary" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">English</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          <IonCard color="warning" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Math</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          
          <IonCard color="success" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">P.E</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          <IonCard color="medium" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Computer</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          <IonCard color="secondary" style={{textAlign: "center", color: "white"}}>

            <IonCardContent>
            <MDBTypography className="fw-bold ">Filipino</MDBTypography>
            <hr/>
            <MDBTypography className="fw-bold ">75</MDBTypography>
            </IonCardContent>

          </IonCard>
          </IonCardContent>

          </IonCard>
          
          </IonCol>
        </IonRow>
      </IonGrid>

      </IonContent>
    </IonPage>
    )
}

export default StudentDashboard;
import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
const StudentGrades: React.FC = () => {
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
            Grades
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Grades Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
            <select name="fruits" className="bg-transparent text-dark">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>

            </div>
            {/* <div className="d-flex align-items-center justify-content-center">
            <MDBBtn className="m-2">ADD</MDBBtn>
            </div> */}
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Q1</th>
                        <th scope='col'>Q2</th>
                        <th scope='col'>Q3</th>
                        <th scope='col'>Q4</th>
                        <th scope='col'>GWA</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        </tr>
                        
                    </MDBTableBody>
                </MDBTable>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        

      </IonContent>
    </IonPage>
    )
}

export default StudentGrades;
import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
const TeacherGrading: React.FC = () => {
    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Teacher</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
            <div className="p-2 rounded fw-bold" style={{background: "#D1D4D6", color: "gray"}}>
            Student Grading
            </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Student Grading</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
            <select name="fruits" className="bg-transparent text-dark">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
            </select>

            </div>
            <div className="d-flex align-items-center justify-content-center">
            <MDBBtn className="m-2">ADD</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Student Name</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>
                            <MDBBtn className="mx-1">
                                View forms
                            </MDBBtn>
                        </td>
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

export default TeacherGrading;
import React, {useState, useEffect} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader, useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AssignSubjectTeacher from "./modal/subject/assignteacher";
const AdminSubjectTeacher: React.FC = () => {
  const [subject, setSubject] = useState([])
  // const [basicModal, setBasicModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [rowdata, setRowdata] = useState([]);
  const [present] = useIonToast();
  // const toggleShow = (open: boolean) => setBasicModal(open);

  

  const toggleShow = (open: boolean, data: any) => {
    setEditModal(open)
    setRowdata(data)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/find`)
    .then(result => result.json())
    .then(data => {
      setSubject(data.data)
      console.log(data)
    })
  },[])

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Administrator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Subject" text2="Assigned Teacher"/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Subject Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
                &nbsp; Search: 
                &nbsp; <MDBInput/>
                &nbsp; <MDBBtn>
                <MDBIcon fas icon="search" size="xl" />
                </MDBBtn>
            </div>
            {/* <div className="d-flex align-items-center justify-content-center">
            <MDBBtn className="m-2">ADD</MDBBtn>
            </div> */}
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Teacher</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Schedule</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {subject.length !== 0 ? 
                      subject.map((data: any,i) => (
                      <tr>
                        <td>{ data.teacher ? data.teacher.firstname + " " + data.teacher.middlename + " " + data.teacher.lastname : "Please Assign a Teacher"}</td>
                        <td>{data.yearandsection.year}</td>
                        <td>{data.yearandsection.section}</td>
                        <td>{data.subjectname}</td>
                        <td>{data.shift}</td>
                        <td>{new Date(data.createdAt).toLocaleString()}</td>
                        <td>
                            <MDBBtn onClick={() => toggleShow(true,data)} block disabled={data.teacher ? true : false}>
                                Assign
                            </MDBBtn>
                            <MDBBtn onClick={() => toggleShow(true,data)} block disabled={data.teacher ? false : true}>
                                Reassign
                            </MDBBtn>
                        </td>
                        </tr>
                      ))
                      :
                      <tr>
                        <td colSpan={6}>No Data</td>
                      </tr>
                      }
                        
                        
                    </MDBTableBody>
                </MDBTable>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
      <AssignSubjectTeacher data={rowdata} basicModal={editModal} onbasicModal={toggleShow}/>
    </IonPage>
    )
}

export default AdminSubjectTeacher;
import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader,useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AddStudent from "./modal/accountmanagement/addstudent";
import ViewStudent from "./modal/accountmanagement/viewstudent";
import EditStudent from "./modal/accountmanagement/editstudent";
const AdminAccountManagementStudent: React.FC = () => {
    const [student, setStudent] = useState([])
    const [basicModal, setBasicModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [rowdata, setRowdata] = useState([]);
    const [present] = useIonToast();
    const toggleShow = (open: boolean) => setBasicModal(open);

    const toggleShow1 = (open: boolean, data: any) => {
      setViewModal(open)
      setRowdata(data)
    }

    const toggleShow2 = (open: boolean, data: any) => {
      setEditModal(open)
      setRowdata(data)
    }

    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}student/find`)
      .then(result => result.json())
      .then(data => {
        setStudent(data.data)
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
        <Breadcrumb text1="Account Management" text2="Student"/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Student Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
                &nbsp; Search: 
                &nbsp; <MDBInput/>
                &nbsp; <MDBBtn>
                <MDBIcon fas icon="search" size="xl" />
                </MDBBtn>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <MDBBtn onClick={() => toggleShow(true)} className="m-2">ADD</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Fullname</th>
                        <th scope='col'>Year and Section</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      { student.length !== 0 ?
                      student.map((data: any,i) => (
                      <tr>
                        <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
                        <td>{data.yearandsection.year + " - " + data.yearandsection.section}</td>
                        <td>{data.address}</td>
                        <td>{data.contact}</td>
                        <td>{new Date(data.createdAt).toLocaleString()}</td>
                        <td>
                            <MDBBtn onClick={() => toggleShow1(true,data)}  block className="mx-1">
                                View
                            </MDBBtn>
                            <MDBBtn onClick={() => toggleShow2(true,data)}  block className="mx-1">
                                Edit
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
      <AddStudent basicModal={basicModal} onbasicModal={toggleShow}/>
      <ViewStudent data={rowdata} basicModal={viewModal} onbasicModal={toggleShow1}/>
      <EditStudent data={rowdata} basicModal={editModal} onbasicModal={toggleShow2}/>
    </IonPage>
    )
}

export default AdminAccountManagementStudent;
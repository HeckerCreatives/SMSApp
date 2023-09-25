import React, { useEffect, useState } from "react";
import { 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody, 
  MDBBtn, 
  MDBTypography, 
  MDBInput, 
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AddTeacher from "./modal/accountmanagement/addteacher";
import ViewTeacher from "./modal/accountmanagement/viewteacher";
import EditTeacher from "./modal/accountmanagement/editteacher";
const AdminAccountManagementTeacher: React.FC = () => {
    const [teacher, setTeacher] = useState([])
    const [basicModal, setBasicModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [rowdata, setRowdata] = useState([]);
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
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/find`)
      .then(result => result.json())
      .then(data => {
        setTeacher(data.data)
        console.log(data)
      })
      // console.log(teacher)
    },[])
    
   

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Administrator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Account Management" text2="Teacher"/>
        
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Teacher Detail</IonCardTitle>
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
            <MDBBtn onClick={() => toggleShow(true)} className="mx-3">Add</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Fullname</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <>
                      { teacher ?
                      teacher.map((data: any,i) => (
                      <tr key={`teacher-${i}`}>
                      <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
                      <td>{data.address}</td>
                      <td>{data.contact}</td>
                      <td>{new Date(data.createdAt).toLocaleString()}</td>
                      <td>
                          <MDBBtn 
                          onClick={() => toggleShow1(true,data)} 
                          className="mx-1">
                          View
                          </MDBBtn>

                          <MDBBtn 
                          onClick={() => toggleShow2(true,data)} 
                          className="mx-1">
                          Edit
                          </MDBBtn>

                          <MDBBtn className="mx-1">
                          Ban
                          </MDBBtn>
                      </td>
                      </tr>
                      )) 
                      
                      :
                      <span> No Data </span>
                      }
                      </>  
                        
                    </MDBTableBody>
                </MDBTable>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>

        
        
      </IonContent>
      <EditTeacher data={rowdata} basicModal={editModal} onbasicModal={toggleShow2}/>
      <ViewTeacher data={rowdata} basicModal={viewModal} onbasicModal={toggleShow1}/>
      <AddTeacher basicModal={basicModal} onbasicModal={toggleShow}/>
    </IonPage>
    
    )
}

export default AdminAccountManagementTeacher;
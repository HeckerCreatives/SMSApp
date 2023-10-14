import React, {useState, useEffect} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader, useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AssignAdviser from "./modal/yearandsection/assignteacher";
import ReassignAdviser from "./modal/yearandsection/reassignteacher";
const AdminYearAndSectionAssignedTeacher: React.FC = () => {
  const [adviser, setAdviser] = useState([])
  const [basicModal, setBasicModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [rowdata, setRowdata] = useState([]);
  const [present] = useIonToast();
  const toggleShow = (open: boolean) => setBasicModal(open);

  const toggleShow1 = (open: boolean, data: any) => {
    setEditModal(open)
    setRowdata(data)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}classroom/find`)
    .then(result => result.json())
    .then(data => {
      console.log(data)
      setAdviser(data.data.filter((data:any) => data.adviser !== null))
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
        <Breadcrumb text1="Year and Section" text2="Assigned Adviser"/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Class Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
                &nbsp; Filter: &nbsp;
                <MDBInput/>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <MDBBtn onClick={() => toggleShow(true)} className="m-2">ASSIGN</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Adviser</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      { adviser.length !== 0 ? 
                      adviser?.map((data: any,i) => (
                      <tr key={`adviser-${i}`}>
                        <td>{data.adviser.firstname + " " + data.adviser.middlename + " " + data.adviser.lastname}</td>
                        <td>{data.yearandsection.year}</td>
                        <td>{data.yearandsection.section}</td>
                        <td>{new Date(data.createdAt).toLocaleString()}</td>
                        <td>
                            <MDBBtn onClick={() => toggleShow1(true,data)}>
                                Reassign
                            </MDBBtn>
                        </td>
                      </tr>
                      ))
                      :
                      <tr>
                        <td colSpan={5}>No Data</td>
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
      <AssignAdviser basicModal={basicModal} onbasicModal={toggleShow}/>
      <ReassignAdviser data={rowdata} basicModal={editModal} onbasicModal={toggleShow1}/>
    </IonPage>
    )
}

export default AdminYearAndSectionAssignedTeacher;